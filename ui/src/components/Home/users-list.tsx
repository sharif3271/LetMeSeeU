import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from 'src/store/stores/main/selector';
import AvatarPlaceHolder from 'src/assets/images/avatar.png';
import { HiOutlineUpload } from 'react-icons/hi';
import { MainFacade } from 'src/store/stores/main';


export function UsersList() {
  const { profile } = useSelector(selectProfile);
  const facade = useMemo(() => new MainFacade(), []);
  return (
    <div className='w-full h-full'>
      <div className='avatar-container'>
        {
          profile?.avatar
            ? <img src={profile?.avatar}  alt='avatar'/>
            : (
              <div>
                <img src={AvatarPlaceHolder}  alt='avatar'/>
                <label htmlFor='upload-file'><HiOutlineUpload /></label>
                <input
                  style={{ display: 'none' }}
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    if (e?.target?.files?.length) {
                      // onSuccess(e?.target?.files[0]);
                    }
                  }}
                  id='upload-file'
                />
              </div>
            )
        }
        <h2>{profile?.name}</h2>
      </div>
    </div>
  );
}