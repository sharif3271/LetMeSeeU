import React, { FC, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, useAnimate } from 'framer-motion';
import { useMemo } from 'react';
import { FadeInOutVertically } from 'src/components/shared';

export interface ModalableComponentProps<T = unknown> {
  close: (cbData: T) => void;
}

interface ModalProps<T> {
  component: FC<ModalableComponentProps<T>>;
  hasBackDrop?: boolean;
  callback?: (v: T) => void;
}

export function useAsModal<T = unknown>({
  component: RenderComponent,
  hasBackDrop = true,
  callback
}: ModalProps<T>) {

  const target = useMemo(() => document.getElementById('modal-root') as HTMLElement, []);

  const [exit, setExit] = useState(false);
  const [scope, animate] = useAnimate();
  const [_show, _setShow] = useState(false);
  const show = useCallback(() => _setShow(true), [_setShow]);
  const close = useCallback(() => setExit(true), [setExit]);

  useEffect(() => {
    if (exit) {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0.2, y: '100vh' }, { duration: 0.3, ease: 'easeOut' });
        _setShow(false);
        setExit(false);
      };
      exitAnimation();
    }
  }, [exit, _setShow, setExit]);

  const closeWithCallback = useCallback((data: unknown) => {
    close();
    callback?.(data as any);
  }, []);

  const Modal = useMemo(() => () => ReactDOM.createPortal((
    _show ? (
      <>
        <div className={`modal-back-drop ${hasBackDrop && 'bg-[#0000007c]'}`}></div>
        <motion.div
          variants={FadeInOutVertically}
          initial={'initial'}
          animate={'final'}
          onClick={close}
          ref={scope}
          className='absolute inset-0 max-w-app mx-auto flex min-h-screen z-50 justify-center items-end md:items-center bg-transparent'
        >
          <RenderComponent close={closeWithCallback} />
        </motion.div>
      </>
    ) : null
  ), target), [target, _show]);

  return { show, close, Modal };
}