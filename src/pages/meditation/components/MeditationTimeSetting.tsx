import { Dispatch } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SettingContainer, MinuteSpan } from './MeditationTimeSetting.style';

import 'swiper/css';

interface MeditationTimeSettingProps {
  setCurrMin: Dispatch<React.SetStateAction<number>>;
  timeArr: number[];
  initialSlide: number;
}

const MeditationTimeSetting = ({
  setCurrMin,
  timeArr,
  initialSlide
}: MeditationTimeSettingProps) => {
  return (
    <SettingContainer>
      <Swiper
        initialSlide={initialSlide - 1}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        onSlideChange={(e) => {
          setCurrMin(e.activeIndex + 1);
        }}
        className='mySwiper'>
        {timeArr.map((el, idx) => (
          <SwiperSlide key={el + idx}>
            {el}
            <MinuteSpan>분</MinuteSpan>
          </SwiperSlide>
        ))}
      </Swiper>
    </SettingContainer>
  );
};

export default MeditationTimeSetting;
