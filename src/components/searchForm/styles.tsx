import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 1rem 0.75rem;
    width: 54rem;
    height: 3.125rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
