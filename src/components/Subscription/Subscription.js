import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  SubSec,
  SubCard,
} from './Subscription.elements';
import {
  ImgWrapper,
  Img
} from '../Universal/Universal.elements';

function Subscription({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  alt,
  img,
  start
}) {
  return (
    <>
      <SubSec lightBg={lightBg}>
        <Container>
          <SubCard >
            <Img src={img} alt={alt} />
          </SubCard>
        </Container>
      </SubSec>
    </>
  );
}

export default Subscription;
