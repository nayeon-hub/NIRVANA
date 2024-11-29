import { useRef, Dispatch } from 'react';
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
  currentIdx: number;
  setCurrentIdx: Dispatch<React.SetStateAction<number>>;
}

const ThemeSlide = ({
  mediTheme,
  currentIdx,
  setCurrentIdx
}: ThemeSlideProps) => {
  const swiperRef = useRef(null);

  const showSlide = (slideIdx: number) => {
    swiperRef.current.style.setProperty(
      'transform',
      `translateX(-${slideIdx * 100}%)`
    );
    setCurrentIdx(slideIdx);
  };

  return (
    <SlideMain>
      <SlideButtonContainer>
        {currentIdx > 0 && (
          <SlideLeftButton
            onClick={() => {
              if (currentIdx > 0) {
                showSlide(currentIdx - 1);
              }
            }}>
            <Icon
              name={'chevron_left'}
              size={34}
              color={'white'}
            />
          </SlideLeftButton>
        )}
        {currentIdx < 3 && (
          <SlideRightButton
            onClick={() => {
              if (currentIdx < 3) {
                showSlide(currentIdx + 1);
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
              active={currentIdx === idx}></SlideCircle>
          ))}
        </SlidePagination>
      </SlideItemContainer>
    </SlideMain>
  );
};

export default ThemeSlide;
