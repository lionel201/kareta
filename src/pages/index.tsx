import CountDown from '@/common/components/CountDown';
import { Layout } from '@/common/components/Layout';
import { MAINNET_START_TIME } from '@/common/consts';
import { getDiff } from '@/utils';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const isStarted = getDiff(MAINNET_START_TIME * 1000) < 0;
  return (
    <Layout>
      <h1 className={'logo'}></h1>
      <div className={'count-down text-center'}>
        {!isStarted ? (
          <div className={'flex justify-center'}>
            <div>
              <div className={'mb-4'}>MAINNET LIVE IN</div>
              <CountDown endAt={MAINNET_START_TIME} onMomentChange={() => {}} />
            </div>
          </div>
        ) : (
          'MINT LIVE'
        )}
      </div>
      <div className={'social'}>
        <Link className={'nav-link'} href={''}>
          <p className={'nav-text'}>DISCORD</p>
        </Link>
        <Link className={'nav-link'} href={''}>
          <p className={'nav-text'}>TWITTER</p>
        </Link>
        <Link className={'nav-link'} href={'/roadmap'}>
          <p className={'nav-text'}>ROADMAP</p>
        </Link>
      </div>
    </Layout>
  );
}
