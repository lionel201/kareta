import { Layout } from '@/common/components/Layout';
import Link from 'next/link';
import React from 'react';

const Page: React.FunctionComponent = () => {
  return (
    <Layout>
      <Link className={'roadmap-logo'} href={'/'}></Link>
      <div className={'phaseinfo'}>
        <div className="phase">
          <div className="check flex justify-center">
            <h1 className={'phase-title text-center'}>PHASE 0 - Developing the Collection</h1>
          </div>
          <ul className={'pl-10 my-5'}>
            <li className={'text-base list-disc'}>
              Created custom NFT generator that allows for combining GIFs at an efficient speed.
            </li>
            <li className={'text-base list-disc'}>Art for 4000 Animated NFTs with unique, hand-drawn traits.</li>
          </ul>
        </div>
        <div className="phase">
          <div className="check flex justify-center">
            <h1 className={'phase-title text-center'}>PHASE 1 - Proof of Concept</h1>
          </div>
          <ul className={'pl-10 my-5'}>
            <li className={'text-base list-disc'}>
              Kareta Clickr, an Aptos integrated minigame, A proof of concept for web-games with wallet connection,
              which allows the community a fair chance to earn Whitelists.
            </li>
            <li className={'text-base list-disc'}>
              Partner with Blue Chip NFTs for future integration in our webgames for their holders.
            </li>
          </ul>
        </div>
        <div className="phase">
          <div className="flex justify-center">
            <h1 className={'phase-title text-center'}>PHASE 2 - Launching the Community</h1>
          </div>
          <ul className={'pl-10 my-5'}>
            <li className={'text-base list-disc'}>Kareta Collection Mint.</li>
            <li className={'text-base list-disc'}>Hiring Mods and Collab managers to help manage community.</li>
            <li className={'text-base list-disc'}>Maintain a vault for our future building expenses.</li>
            <li className={'text-base list-disc'}>Migrate KaretaClickr to include our Partner's NFTs.</li>
            <li className={'text-base list-disc'}>
              Build a Name Brand around Kareta, that spreads to other chains through on-chain activity + communicating
              with other Projects
            </li>
          </ul>
        </div>
        <div className="phase">
          <div className=" flex justify-center">
            <h1 className={'phase-title text-center'}>PHASE 3 - Introducing Utility</h1>
          </div>
          <ul className={'pl-10 my-5'}>
            <li className={'text-base list-disc'}>
              Developing an arcade hub for Kareta + Partner NFTs to allow the Aptos community to play games for Prizes
              funded from our Vault.
            </li>
            <li className={'text-base list-disc'}>
              This hub will be an online server where wallets can connect and use their NFTs as playable characters.
            </li>
            <li className={'text-base list-disc'}>
              The hub will go online for holders to access and test as soon as a proof of concept is developed.
            </li>
          </ul>
        </div>
        <div className="phase">
          <div className="flex justify-center">
            <h1 className={'phase-title text-center'}>PHASE 4 - Expanding the Ecosystem</h1>
          </div>
          <ul className={'pl-10 my-5'}>
            <li className={'text-base list-disc'}>
              Developing more complex and detailed games into the arcade hub to match snowballing traction.
            </li>
            <li className={'text-base list-disc'}>
              Partner with NFT on other chains to onboard more users to Aptos-native projects.
            </li>
            <p></p>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default Page;
