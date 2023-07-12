import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoadWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoadWrapper>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoadWrapper>
  );
};

export default Loader;
