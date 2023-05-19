import React from 'react';
import { Toaster } from 'react-hot-toast';

export function ToasterProvider() {
  return (
    <Toaster
      position='bottom-center'
      toastOptions={{
        error: {
          style: {
            background: '#161515',
            color: 'var(--color-text-dark-soft)',
          },
        },
      }}
    />
  );
}