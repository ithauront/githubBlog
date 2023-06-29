import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`
export const ProfileContent = styled.div`
  position: absolute;
  top: -5rem;
  z-index: 1;

  width: 54rem;
  height: 13.25rem;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-weight: bold;
        color: ${(props) => props.theme['base-title']};
      }
      a {
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        color: ${(props) => props.theme.blue};

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
        }
      }
    }
    p {
      color: ${(props) => props.theme['base-text']};
      text-align: left;
    }
    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
      span {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        p {
          color: ${(props) => props.theme['base-subtitle']};
        }
        i {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
