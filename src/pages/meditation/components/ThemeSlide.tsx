import { useRef, Dispatch, useEffect } from 'react';
import { Icon } from '@components/Icon';
import {
  SlideMain,
  SlideItem,
  SlideButtonContainer,
  SlideLeftButton,
  SlideRightButton,
  SlideItemContainer,
  SlideItemWrapper,
  SlidePagination,
  SlideCircle,
  ThemeH2,
  ThemeSpan
} from './ThemeSlide.style';

interface ThemeSlideProps {
  mediTheme: { label: string; id: string; content: string }[];
  themCurrentIdx: number;
  setThemeCurrentIdx: Dispatch<React.SetStateAction<number>>;
}

const ThemeSlide = ({
  mediTheme,
  themCurrentIdx,
  setThemeCurrentIdx
}: ThemeSlideProps) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.style.setProperty(
      'transform',
      `translateX(-${themCurrentIdx * 100}%)`
    );
  }, [themCurrentIdx]);

  const showSlide = (slideIdx: number) => {
    swiperRef.current.style.setProperty('transition', `transform 1s`);
    swiperRef.current.style.setProperty(
      'transform',
      `translateX(-${slideIdx * 100}%)`
    );
    setThemeCurrentIdx(slideIdx);
  };

  return (
    <SlideMain>
      <SlideButtonContainer>
        {themCurrentIdx > 0 && (
          <SlideLeftButton
            onClick={() => {
              if (themCurrentIdx > 0) {
                showSlide(themCurrentIdx - 1);
              }
            }}>
            <Icon
              name={'chevron_left'}
              size={30}
              color={'white'}
            />
          </SlideLeftButton>
        )}
        {themCurrentIdx < 3 && (
          <SlideRightButton
            onClick={() => {
              if (themCurrentIdx < 3) {
                showSlide(themCurrentIdx + 1);
              }
            }}>
            <Icon
              name={'chevron_right'}
              size={34}
              color={'white'}
            />
          </SlideRightButton>
        )}
      </SlideButtonContainer>
      <SlideItemContainer>
        <SlideItemWrapper ref={swiperRef}>
          {mediTheme.map(({ label, id, content }) => (
            <SlideItem key={id}>
              <ThemeH2>{label}</ThemeH2>
              <ThemeSpan>{content}</ThemeSpan>
            </SlideItem>
          ))}
        </SlideItemWrapper>
        <SlidePagination>
          {[1, 2, 3, 4].map((el, idx) => (
            <SlideCircle
              key={el}
              active={themCurrentIdx === idx}></SlideCircle>
          ))}
        </SlidePagination>
      </SlideItemContainer>
    </SlideMain>
  );
};

export default ThemeSlide;
