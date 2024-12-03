import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { ButtonBox } from './SearchButton.style';

interface SearchButton {
  handleClickButton?: (event?: React.FormEvent<HTMLFormElement>) => void;
  searchStatus: boolean;
}

const SearchButton = ({ handleClickButton, searchStatus }: SearchButton) => {
  return (
    <ButtonBox>
      <Button
        width='25px'
        height='25px'
        handleClick={handleClickButton}>
        <Icon
          name='search'
          color={searchStatus ? 'greyLight' : 'white'}
          size={24}
        />
      </Button>
    </ButtonBox>
  );
};

export default SearchButton;
