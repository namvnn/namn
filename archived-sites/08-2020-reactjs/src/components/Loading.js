import React from 'react';
import * as RainbowCat from "../static/RainbowCat.json";
import Lottie from 'react-lottie';

const config = {
    loop: true,
    autoplay: true,
    animationData: RainbowCat.default,
    rendererSettings: {
        preserveAspectiveRatio: 'xMidYMid slice'
    } 
}
const LoadingCat = () => {
    return (
        <div className="loading-cat">
            <Lottie options={config} height={200} width={200}/>
        </div>
    )
}

export default LoadingCat;