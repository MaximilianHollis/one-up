import { Button } from '../../globalStyles';
import styled from 'styled-components';

export const FabButton = styled(Button)`
  position: fixed;
  right: 50px;
  bottom: 50px;
  padding: 12px;
  outline: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 10%;
    right: 15px;
    bottom: 15px;
  }
`