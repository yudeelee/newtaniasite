'use client';

import React from 'react';
import Header from '../components/admin/header/Header';
import { useSession } from 'next-auth/react';

const layout = ({ children }) => {
  const { data: session, status } = useSession();
  return (
    <>
      {status !== 'unauthenticated' && <Header />}
      {children}
    </>
  );
};

export default layout;
