import { Post } from '../../components/post'
import { Profile } from '../../components/profile'
import { SearchForm } from '../../components/searchForm'
import { PublicacoesContent, BlogContainer, PostList } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <BlogContainer>
        <PublicacoesContent>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </PublicacoesContent>
      </BlogContainer>
      <SearchForm />
      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>
    </>
  )
}
