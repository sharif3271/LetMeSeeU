import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from 'src/store/stores/main/selector';
import AvatarPlaceHolder from 'src/assets/images/avatar.png';
import { HiOutlineUpload } from 'react-icons/hi';
import { MainFacade } from 'src/store/stores/main';
import { useAsModal } from '../shared';
import { AddContact } from './add-contacts';

const STORAGE_URL = process.env.STORAGE_URL;

export function UsersList() {
  const { profile } = useSelector(selectProfile);
  const {Modal, show} = useAsModal({component: AddContact});
  const facade = useMemo(() => new MainFacade(), []);
  return (
    <div className='w-full h-full'>
      <div className='avatar-container'>
        {
          profile?.avatar
            ? <img src={`${STORAGE_URL}/${profile?.avatar}`}  alt='avatar'/>
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
                      facade.setProfileAvatar(e.target.files[0]);
                    }
                  }}
                  id='upload-file'
                />
              </div>
            )
        }
        <h2>{profile?.name}</h2>
        <h4 onClick={show}>Find Others</h4>
        <Modal />
      </div>
    </div>
  );
}