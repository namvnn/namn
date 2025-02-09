import * as RainbowCat from "./RainbowCat.json";
import Lottie from "react-lottie";

const config = {
  loop: true,
  autoplay: true,
  animationData: RainbowCat.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const CatRainbow = () => {
  return <Lottie options={config} height={200} width={200} />;
};

export default CatRainbow;
