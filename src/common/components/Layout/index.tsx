import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={'main-page'}>
      <div className={`bg-page`}></div>
      <div className={'cloud-1'}></div>
      <div className={'cloud-2'}></div>
      <div className={'cloud-3'}></div>
      <div className={'bg-blur'}>
        <Link href={'/'}>
          <div className={'logo-aptos cursor-pointer'}>
            <p className={'logo-name text-center'}>ON APTOS</p>
          </div>
        </Link>
        <div className="scanlines"></div>
        {children}
      </div>
    </div>
  );
};
