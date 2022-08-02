import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, StyledHeader, StyledLink } from './Header.styled';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import routesPath from 'routesPath';
import { Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <>
      <StyledHeader as="header">
        <Container>
          <StyledLink to={routesPath.home}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: 34,
                color: '#560668',
                fontWeight: 'bold',
                align: 'center',
              }}
            >
              <AutoStoriesIcon fontSize="large" />
              Contactsbook
            </Typography>
          </StyledLink>

          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Container>
      </StyledHeader>
      <Outlet />
    </>
  );
}
