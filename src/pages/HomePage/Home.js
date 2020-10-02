import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, subscriptionObj } from './Data';
import { InfoSection, Pricing, Subscription } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <Subscription {...subscriptionObj} />
    </>
  );
}

export default Home;
