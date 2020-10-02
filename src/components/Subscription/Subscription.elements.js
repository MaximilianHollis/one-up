import styled from 'styled-components';
import { Section, Card } from '../Universal/Universal.elements'

export const SubSec = styled(Section)`
`;

export const SubCard = styled(Card)`
  height: 300px;
  background-Image: url(${({ img }) => (img)});
  background: #4b59f7;
  background-repeat: no-repeat;
  position: absolute;
  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  background-size: contain;
  overflow: hidden;
`;
