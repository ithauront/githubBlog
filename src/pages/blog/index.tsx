import { Post } from '../../components/post'
import { Profile } from '../../components/profile'
import { SearchForm } from '../../components/searchForm'
import { PublicacoesContent, BlogContainer, PostList } from './styles'
import { IssuesContext } from '../../context/contextIssues'
import { useContext } from 'react'

export function Blog() {
  const { issues } = useContext(IssuesContext)

  return (
    <>
      <Profile />
      <BlogContainer>
        <PublicacoesContent>
          <h2>Publicações</h2>
          <p>{issues.length} publicações</p>
        </PublicacoesContent>
      </BlogContainer>
      <SearchForm />
      <PostList>
        {issues.map((issue) => (
          <Post
            key={issue.number}
            title={issue.title}
            date={issue.date}
            text={issue.text}
            //   onClick={handleClickPost} // temos que ver como o onClick vai funcionar para que va para a pagina post criando o que vem desse post que foi clicado.
          />
        ))}
      </PostList>
    </>
  )
}
