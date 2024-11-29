import { authKey } from '@/constant/authKey';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import setAccessToken from './setAccessToken';

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    }
  );

  const userInfo = await res.json();

  const passwordChangeRequired = userInfo.data.needPasswordChange;

  if (userInfo.data.accessToken) {
    setAccessToken(userInfo.data.accessToken, {
      redirect: '/dashboard',
      passwordChangeRequired,
    });
  }

  return userInfo;
};
