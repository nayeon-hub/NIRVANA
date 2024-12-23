import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GnbLayout, GnbSection, GnbMenu } from './Gnb.style';

import type { User } from '@/types/User';

import useSessionStorage from '@hooks/useSessionStorage';
import { LoginConfirm } from '@components/Confirm';
import { Icon } from '@components/Icon';
import { Button } from '@components/Button';
import { useRecoilState } from 'recoil';
import { openSearch } from '../states/openSearch';

const Gnb = () => {
  const [loginConfirm, setLoginConfirm] = useState(false);
  const [showSearchBox, setShowSearchBox] = useRecoilState(openSearch);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  const handleShowLoginConfirm = () => {
    setLoginConfirm((prev) => !prev);
  };

  const handleClickButton = (path: string) => {
    if (showSearchBox) {
      setShowSearchBox(false);
    }

    if (!(_id && token) && path === `/profile/${_id}`) {
      setLoginConfirm((prev) => !prev);
    } else {
      navigate(path);
    }
  };

  const iconInfos = [
    { name: 'home', size: 35, link: '/posts' },
    { name: 'spa', size: 35, link: '/meditation' },
    { name: 'person', size: 35, link: `/profile/${_id}` }
  ];

  return (
    <>
      {loginConfirm && (
        <LoginConfirm
          handleClickCancel={handleShowLoginConfirm}
          handleClickConfirm={handleShowLoginConfirm}
          path={pathname}
        />
      )}
      <GnbLayout>
        <GnbSection>
          <GnbMenu>
            {iconInfos.map(({ name, size, link }) => (
              <Button
                key={name}
                width='35px'
                height='35px'
                handleClick={() => {
                  handleClickButton(link);
                }}
                borderRadius={0}
                backgroundColor={'transparent'}>
                <Icon
                  name={name}
                  size={size}
                  fill={link === pathname}
                  color={link === pathname ? 'purpleNormal' : 'black'}
                />
              </Button>
            ))}
          </GnbMenu>
        </GnbSection>
      </GnbLayout>
    </>
  );
};

export default Gnb;
