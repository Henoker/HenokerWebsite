import Lottie from 'react-lottie';
import * as animationData from '../public/mainlottie.json';
import { useRef, useCallback, useEffect } from 'react';
import { Box } from '@chakra-ui/react';


const Mainlottie = () => {
  const refContainer = useRef()
  const refRenderer = useRef()
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 
  return (
    <Box  m="auto">
      <Lottie options={defaultOptions} height={260} width={300} />
    </Box>
    
    )
};
  
   


export default Mainlottie;