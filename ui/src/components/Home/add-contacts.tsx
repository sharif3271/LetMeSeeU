import React, { useState } from 'react';
import { ModalableComponentProps, InputSearch, ModalConatiner } from 'src/components/shared';

export function AddContact({ close }: ModalableComponentProps) {
  const [query, setQuery] = useState('');
  return (
    <ModalConatiner className='add-contact-container'>
      <div className='w-full'>
        <InputSearch
          value={query}
          onChange={e => setQuery(e.currentTarget.value)}
        />
      </div>
    </ModalConatiner>
  );
}