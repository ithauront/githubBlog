import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  gap: 1rem;
  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
    }

    p {
    }
  }
  div {
    margin-top: 1rem;
  }
`
