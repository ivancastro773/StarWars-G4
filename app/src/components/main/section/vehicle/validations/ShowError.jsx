import React from 'react';
import { Toast } from '../../../../helpers/sweet-alert';
const ShowError = (props) => {
  return (
    <>
      <br />
      {Toast(props.children, 'error')}
    </>
  );
};
export default ShowError;
