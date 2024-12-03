import { Dispatch } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SettingContainer, MinuteSpan } from './MeditationTimeSetting.style';

import 'swiper/css';

interface MeditationTimeSettingProps {
  setCurrMin: Dispatch<React.SetStateAction<number>>;
  timeArr: number[];
}

const MeditationTimeSetting = ({
  setCurrMin,
  timeArr
}: MeditationTimeSettingProps) => {
  return (
    <SettingContainer>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        onSlideChange={(e) => {
          setCurrMin(e.realIndex);
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
