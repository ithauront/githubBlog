import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  width: 100%;
  height: 18.5rem;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .logo {
    margin-top: 4rem;
  }

  .effectLeft {
    margin-top: 4.375rem;

    &::before {
      content: '';
      position: absolute;
      width: 14.75rem;
      height: 14.75rem;
      top: -6rem;
      left: -8.125rem;
      border-radius: 50%;
      background-color: #14589c;
      filter: blur(3.125rem);
      opacity: 30%;
    }
  }

  .effectRigth {
    margin-top: 1.875rem;
    &::before {
      content: '';
      position: absolute;
      width: 9.703rem;
      height: 9.703rem;
      top: -3.258rem;
      left: 81.261rem;
      border-radius: 50%;
      background-color: #14589c;
      filter: blur(3.125rem);
      opacity: 25%;
    }
  }

  ::before {
    content: '';
    position: absolute;
    width: 55.68rem;
    height: 3.25rem;
    top: 14.687rem;
    left: 17rem;
    background-color: #14589c;
    filter: blur(4.375rem);
    opacity: 50%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    .effectLeft,
    .effectRigth {
      display: none;
    }
  }
`
