import styled from 'styled-components'

export const BlogContainer = styled.div`
  padding: 12.25rem 13.25rem 1rem 13.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 12.25rem 1rem 1rem 0;
  }
`

export const PublicacoesContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 54rem;

  h2 {
    font-size: 1.125rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`
export const PostList = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 13.25rem 1rem 13.25rem;

  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
