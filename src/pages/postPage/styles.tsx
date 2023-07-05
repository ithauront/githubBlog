import styled from 'styled-components'

export const PostTitle = styled.div`
  position: relative;
  top: -5rem;
  z-index: 1;

  width: 54rem;
  height: 13.25rem;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50rem;

    button,
    a {
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
      background: transparent;
      border: none;
      color: ${(props) => props.theme.blue};
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
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
        color: ${(props) => props.theme['base-span']};
      }
      i {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
export const PostTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 2.5rem;
  margin-top: -5rem;
  width: 54rem;

  span {
    width: 50rem;
    line-height: 1.5;

    div {
      color: ${(props) => props.theme.blue};
      text-decoration: underline;
      margin-top: 2rem;
      margin-bottom: 0;
    }
    pre {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      white-space: pre-wrap;
      margin-top: 1rem;

      border-radius: 2px;
      padding: 1rem;
      gap: 0.5rem;
      background-color: ${(props) => props.theme['base-post']};
    }
  }
`
