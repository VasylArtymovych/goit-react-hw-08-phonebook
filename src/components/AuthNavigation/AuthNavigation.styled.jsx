import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-right: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  &.active {
    color: ${({ theme }) => theme.colors.active};
  }
`;

export const LinkWraper = styled('div')`
  display: flex;
  margin-right: -${({ theme }) => theme.space[3]}px;
`;
