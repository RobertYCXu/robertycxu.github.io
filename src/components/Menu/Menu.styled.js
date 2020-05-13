import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${
    ({ open, isMobile }) => open ? 'translateX(0)' :
      (isMobile ? 'translateX(-100%)' : 'translateX(-80%)')
  };
  height: 100vh;
  border-right: ${({ isMobile }) => isMobile ? '1rem' : '0.3rem'} solid ${({ theme }) => theme.primaryMedium};
  text-align: left;
  padding: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    padding: 1.1rem 0;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    outline: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  span, a {
    transition: color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  span {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
    transform: translateY(460%) translateX(120%) rotate(90deg);
    cursor: pointer;
  }
`;