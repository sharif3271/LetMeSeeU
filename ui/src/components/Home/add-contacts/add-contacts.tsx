import React from 'react';
import { ModalableComponentProps, InputSearch, ModalConatiner } from 'src/components/shared';
import { useContacts } from './useContancts';

export function AddContact({ close }: ModalableComponentProps) {

  const {query, setQuery} = useContacts();

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