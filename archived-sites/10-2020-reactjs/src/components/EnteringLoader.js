import React from "react";
import * as RainbowCat from "../assets/loading/RainbowCat.json";
import Lottie from "react-lottie";

const config = {
  loop: true,
  autoplay: true,
  animationData: RainbowCat.default,
  rendererSettings: {
    preserveAspectiveRatio: "xMidYMid slice",
  },
};
const EnteringLoader = () => {
  return (
    <div className="entering-loader">
      <Lottie options={config} height={200} width={200} />
    </div>
  );
};

export default EnteringLoader;
