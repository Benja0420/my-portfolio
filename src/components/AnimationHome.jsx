import Lottie from "react-lottie";
import animationData from "../assets/animations/animationHome.json";

const AnimationHome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie className='z-0' options={defaultOptions} height={750}/>;
};

export default AnimationHome;
