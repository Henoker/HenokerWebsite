import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../public/mainlottie.json';


const Mainlottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={440} width={520} />;

};
  
   


export default Mainlottie;