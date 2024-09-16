import React from 'react';
import styled from 'styled-components';
import backgroundImage from './banner1.png'; // Замените 'your_image.jpg' на путь к вашему изображению

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: true;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #4CB050;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: white;
    cursor: pointer;
  }
`
const Welcome = styled.div`
   @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(-45deg, #ffb07c, #ff3e88, #2969ff, #ef3cff, #ff3c87);
  background-size: 100% 100%;
  animation: welcome-fade-in .5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }


  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
  background-image: url(${backgroundImage}); /* Установка вашего изображения в качестве фона */
`


export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1 style={{ textShadow: '2px 2px 4px #000000' }}>$PIC CASINO</h1>
        <h1 style={{ textShadow: '2px 2px 4px #000000' }}>OPENING TODAY</h1>
        <p></p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://pump.fun/A5ZVj3bvwCjsGGTx2X4zvmQeKDbG4rT2wgknVQzrpump', '_blank')}>
          Buy $PIC on PUMP
        </button>
        <button onClick={() => window.open('https://x.com/PUMPfunCasino', '_blank')}>
         Join Community
        </button>
      </Buttons>
    </Welcome>
  );
}
