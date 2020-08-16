import React from 'react';

const ParallaxComponent = () => {
  return (
    <div>
      {/* -----basic config-----*/}
      <Parallax
        blur={10}
        bgImage={require('../images/backgrounds/black-linen.png')}
        bgImageAlt='background'
        strength={200}
      >
        <div style={{ height: '200px' }} />
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
