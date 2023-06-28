import styled from 'styled-components'

export const BlogContainer = styled.body`
  padding: 16rem 13.25rem 1rem 13.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PublicacoesContainer = styled.span`
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
`
