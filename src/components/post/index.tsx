import { IssueProps } from '../../context/contextIssues'
import { PostContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export function Post({ title, date, text, comments, url }: IssueProps) {
  const navigate = useNavigate()
  const handleClickPost = () => {
    navigate('/post', { state: { title, date, text, comments, url } })
  }
  return (
    <PostContainer onClick={handleClickPost}>
      <span>
        <h2>{title}</h2>
        <p>{date}</p>
      </span>
      <div>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </PostContainer>
  )
}
