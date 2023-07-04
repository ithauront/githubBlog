import { useContext } from 'react'
import { PostContainer } from './styles'
import { IssuesContext } from '../../context/contextIssues'

export function Post() {
  const { issues } = useContext(IssuesContext)
  if (issues.length === 0) {
    return null
  }
  const firstIssue = issues[0]
  return (
    <PostContainer // onClick={ir para post}
    >
      <span>
        <h2>{firstIssue.title}</h2>
        <p>{firstIssue.date}</p>
      </span>
      <div>{firstIssue.text}</div>
    </PostContainer>
  )
}
