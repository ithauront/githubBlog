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
    div {
      color: ${(props) => props.theme.blue};
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;

    h2 {
      width: 17.6875rem;
      text-align: left;
      color: ${(props) => props.theme['base-title']};
      font-size: 20px;
      line-height: 100%;
    }

    p {
      width: 3.3125rem;
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
    }
  }
  div {
    margin-top: 1rem;
    width: 22rem;
    height: 7rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    line-height: 180%;
  }
`
