import { Post } from '../../components/post'
import { Profile } from '../../components/profile'
import { SearchForm } from '../../components/searchForm'
import { PublicacoesContainer, BlogContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <BlogContainer>
        <PublicacoesContainer>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </PublicacoesContainer>
      </BlogContainer>
      <SearchForm />
      <Post />
    </>
  )
}
