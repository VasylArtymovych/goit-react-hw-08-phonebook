import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  min-height: 45px;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
  border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
`;
