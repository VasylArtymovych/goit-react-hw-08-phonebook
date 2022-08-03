import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import avatar from '../../images/user-avatar.jpeg';

import LogoutIcon from '@mui/icons-material/Logout';
import { ImgWrap, Container, Button } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  return (
    <Container>
      <ImgWrap>
        <img src={avatar} alt="avatar" />
      </ImgWrap>
      <span>Welcome, {name}</span>
      <Button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        <LogoutIcon sx={{ color: 'white' }} />
      </Button>
    </Container>
  );
}
