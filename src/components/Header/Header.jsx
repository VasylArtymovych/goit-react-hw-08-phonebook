import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from './Header.styled';
import { Box } from 'components/Box/Box';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <>
      <Container as="header">
        <div>Contactbook</div>
        <NavLink to="contacts">contacts</NavLink>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Box>
            <NavLink to="login">Log in</NavLink>
            <NavLink to="register">Register</NavLink>
          </Box>
        )}
      </Container>

      <Outlet />
    </>
  );
}
