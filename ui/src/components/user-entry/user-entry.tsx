import React, { useCallback, useState } from 'react';
import { RouterContainer, UserLogin, UserRegister } from 'src/components';

export function UserEntry() {

  const [entryType, setEntryType ] = useState<'Login' | 'Register'>('Login');
  const go2register = useCallback(() => setEntryType('Register'), []);
  const go2login = useCallback(() => setEntryType('Login'), []);

  return (
    <RouterContainer>
      <div className={'fill'}>
        {entryType === 'Login' && (
          <UserLogin goTo={go2register}/>
        )}
        {entryType === 'Register' && (
          <UserRegister goTo={go2login}/>
        )}
      </div>
    </RouterContainer>
  );
}