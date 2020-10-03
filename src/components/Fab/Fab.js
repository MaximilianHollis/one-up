import React from 'react';
import { FabButton } from './Fab.element';
import { FaArrowUp } from 'react-icons/fa';

function Fab() {
  return (
    <>
      <FabButton primary={true}>
        <FaArrowUp />
      </FabButton>
    </>
  );
}

export default Fab;