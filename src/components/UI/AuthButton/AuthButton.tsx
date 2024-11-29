import { authKey } from '@/constant/authKey';
import { deleteCookies } from '@/services/actions/deleteCookies';
import { logoutUser } from '@/services/actions/logoutUser';
import { getUserInfo, removeUser } from '@/services/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser(router);
  };

  return (
    <>
      {userInfo?.userId ? (
        <Button onClick={handleLogout} color="error">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
