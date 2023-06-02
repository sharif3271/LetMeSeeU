import React, { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';
import { FadeInOutVertically } from 'src/components/shared';

export interface ModalableComponentProps<T> {
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

  const [_show, _setShow] = useState(false);
  const show = useCallback(() => _setShow(true), [_setShow]);
  const close = useCallback(() => _setShow(false), [_setShow]);
  const closeWithCallback = useCallback((data: unknown) => {
    _setShow(false);
    callback?.(data as any);
  }, [_setShow]);
  const Modal = useMemo(() => ReactDOM.createPortal((
    <AnimatePresence>
      {
        _show && (
          <>
            <div className={`modal-back-drop ${hasBackDrop && 'bg-[#0000007c]'}`} onClick={close}></div>
            <motion.div
              variants={FadeInOutVertically}
              initial={'initial'}
              animate={'final'}
              exit={'exit'}
            >
              <RenderComponent close={closeWithCallback}/>
            </motion.div>
          </>
        )
      }
    </AnimatePresence>
  ), target), [target, _show]);

  return { show, close, Modal };
}