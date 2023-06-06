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
  const [container, animate] = useAnimate();
  const [show, setShow] = useState(false);
  const showModal = useCallback(() => setShow(true), [setShow]);
  const close = useCallback(() => setExit(true), [setExit]);

  useEffect(() => {
    if (exit) {
      const exitAnimation = async () => {
        await animate(
          container.current,
          { opacity: 0.2, y: '100vh' },
          { duration: 0.3, ease: 'easeOut' }
        );
        setShow(false);
        setExit(false);
      };
      exitAnimation();
    }
  }, [exit]);

  const closeWithCallback = useCallback((data: unknown) => {
    close();
    callback?.(data as any);
  }, []);

  const Modal = useMemo(() => () => ReactDOM.createPortal((
    show ? (
      <>
        <div className={`modal-back-drop ${hasBackDrop && 'bg-[#0000007c]'}`}></div>
        <motion.div
          variants={FadeInOutVertically}
          initial={'initial'}
          animate={'final'}
          onClick={close}
          ref={container}
          className='absolute inset-0 max-w-app mx-auto flex min-h-screen z-50 justify-center items-end md:items-center bg-transparent'
        >
          <RenderComponent close={closeWithCallback} />
        </motion.div>
      </>
    ) : null
  ), target), [target, show]);

  return { show: showModal, close, Modal };
}