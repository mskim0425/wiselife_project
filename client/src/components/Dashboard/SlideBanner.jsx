import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider';

import { Wrapper, Subtitle, Title } from '../../style/Dashboard/SlideStyle';

import Header from '../Common/Header';

const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg';
const craterRock = 'https://i.imgur.com/8DYumaY.jpg';
const giauPass = 'https://i.imgur.com/8IuucQZ.jpg';

export default function SlideBanner() {
  return (
    <HeroSlider
      height={'100vh'}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 1500,
        slidingDelay: 1000,
        onSliding: (nextSlide) =>
          console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug('onAfterSliding(nextSlide): ', nextSlide),
      }}
    >
      <Overlay>
        <Header />
        <Wrapper>
          <Title>
            행복한 삶을 살고 싶다면
            <br />
            목표에 의지하라.
          </Title>
          <Subtitle>혼자하기 힘든 일도 슬기로운 생활과 함께라면</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: giauPass,
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: craterRock,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
