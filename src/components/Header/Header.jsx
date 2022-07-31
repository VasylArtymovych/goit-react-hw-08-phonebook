import { NavLink, Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { Container } from './Header.styled';

export default function Header() {
  return (
    <>
      <Container as="header">
        <div>Contactbook</div>
        <Box>
          <NavLink to="login">Log in</NavLink>
          <NavLink to="register">Register</NavLink>
          <NavLink to="contacts">contacts</NavLink>
        </Box>
      </Container>

      <Outlet />
    </>
  );
}
