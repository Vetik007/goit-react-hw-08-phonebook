// import styled, { keyframes } from 'styled-components';

// const random_range = (min, max) => {
//   const rand = Math.random();
//   const random_range = min + Math.floor(rand * ((max - min) + 1));
//   return random_range;
// };

// const fallAnimation = (randomX, randomOffset, randomYoyoTime, randomYoyoY, randomScale, fallDuration, fallDelay) => keyframes`
//   from {
//     transform: translate(${randomX}, -10px) scale(${randomScale});
//   }

//   ${percentage(randomYoyoTime)} {
//     transform: translate(${randomX + randomOffset / 2}, ${randomYoyoY}) scale(${randomScale});
//   }

//   to {
//     transform: translate(${randomX + randomOffset}, 100vh) scale(${randomScale});
//   }
// `;

// const Snow = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background: white;
//   border-radius: 50%;
// `;

// const total = 200;

// const Snowfall = () => {
//   const snowflakes = Array.from({ length: total }, (_, index) => {
//     const randomX = `${Math.random() * 0.0001}vw`;
//     const randomOffset = `${random_range(-100000, 100000) * 0.0001}vw`;
//     const randomYoyoTime = random_range(30000, 80000) / 100000;
//     const randomYoyoY = `${randomYoyoTime * 100}vh`;
//     const randomScale = `${Math.random() * 0.0001}`;
//     const fallDuration = `${random_range(10, 30)}s`;
//     const fallDelay = `${random_range(-30, 0)}s`;

//     return (
//       <Snow
//         key={index}
//         style={{
//           opacity: Math.random() * 0.0001,
//           transform: `translate(${randomX}, -10px) scale(${randomScale})`,
//           animation: `${fallAnimation(randomX, randomOffset, randomYoyoTime, randomYoyoY, randomScale, fallDuration, fallDelay)} linear infinite`,
//         }}
//       />
//     );
//   });

//   return <>{snowflakes}</>;
// };

// export default Snowfall;

// ================================

import styled, { keyframes } from 'styled-components';

const random_range = (min, max) => {
  const rand = Math.random();
  const random_range = min + Math.floor(rand * (max - min + 1));
  return random_range;
};

const fallAnimation = (
  randomX,
  randomOffset,
  randomYoyoTime,
  randomYoyoY,
  randomScale,
  fallDuration,
  fallDelay
) => keyframes`
  from {
    transform: translate(${randomX}, -10px) scale(${randomScale});
  }

  ${randomYoyoTime * 100}% {
    transform: translate(${
      parseFloat(randomX) + parseFloat(randomOffset) / 2
    }, ${randomYoyoY}) scale(${randomScale});
  }

  to {
    transform: translate(${
      parseFloat(randomX) + parseFloat(randomOffset)
    }, 100vh) scale(${randomScale});
  }
`;

const Snow = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
`;

const total = 200;

const Snowfall = () => {
  const snowflakes = Array.from({ length: total }, (_, index) => {
    const randomX = `${Math.random() * 0.0001}vw`;
    const randomOffset = `${random_range(-100000, 100000) * 0.0001}vw`;
    const randomYoyoTime = random_range(30000, 80000) / 100000;
    const randomYoyoY = `${randomYoyoTime * 100}vh`;
    const randomScale = `${Math.random() * 0.0001}`;
    const fallDuration = `${random_range(10, 30)}s`;
    const fallDelay = `${random_range(-30, 0)}s`;

    return (
      <Snow
        key={index}
        style={{
          opacity: Math.random() * 0.0001,
          transform: `translate(${randomX}, -10px) scale(${randomScale})`,
          animation: `${fallAnimation(
            randomX,
            randomOffset,
            randomYoyoTime,
            randomYoyoY,
            randomScale,
            fallDuration,
            fallDelay
          )} linear infinite`,
        }}
      />
    );
  });

  return <>{snowflakes}</>;
};

export default Snowfall;
