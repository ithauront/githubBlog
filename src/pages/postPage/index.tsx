import { useState, useEffect } from 'react'
import { BodyContainer } from '../../components/profile/styles'
import { PostTextContainer, PostTitle } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function PostPage() {
  const location = useLocation()
  const { title, date, comments, url, text } = location.state

  const [userName, setUserName] = useState<string>('')
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate('/')
  }
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/ithauront',
        )
        setUserName(response.data.html_url.slice(19))
      } catch (error) {
        console.error(error)
      }
    }
    fetchUserName()
  }, [])

  const renderCodeBlock = (props: any) => {
    const { language, value } = props
    return (
      <SyntaxHighlighter language={language} style={dracula}>
        {value}
      </SyntaxHighlighter>
    )
  }

  return (
    <>
      <BodyContainer>
        <PostTitle>
          <div className="links">
            <button onClick={handleClickBack}>
              <i className="fa-solid fa-angle-left"></i>VOLTAR
            </button>
            <a href={url}>
              VER NO GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <h1>{title}</h1>

          <div className="info">
            <span>
              <i className="fa-brands fa-github"></i>
              <p>{userName}</p>
            </span>
            <span>
              <i className="fa-solid fa-calendar-day"></i>
              <p>{date}</p>
            </span>
            <span>
              <i className="fa-solid fa-comment"></i>
              <p>{comments} comentários</p>
            </span>
          </div>
        </PostTitle>
      </BodyContainer>
      <BodyContainer>
        <PostTextContainer>
          <span>
            <ReactMarkdown components={{ code: renderCodeBlock }}>
              {text}
            </ReactMarkdown>
          </span>
        </PostTextContainer>
      </BodyContainer>
    </>
  )
}
