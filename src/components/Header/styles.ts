import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  nav > div {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  nav a {
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
  }
`
