import React, { useState, useEffect } from 'react'
import { BodyContainer } from '../../components/profile/styles'
import { PostTextContainer, PostTitle } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

  const renderCodeBlock = ({ children }: any) => {
    return (
      <div>
        <SyntaxHighlighter language="typescript" style={oneDark}>
          {children}
        </SyntaxHighlighter>
      </div>
    )
  }
  const CustomHeading = ({ level, children }: any) => {
    const HeadingComponent = `h${level}` as keyof React.JSX.IntrinsicElements
    const headingClassName = `custom-heading-${level}`
    return (
      <HeadingComponent className={headingClassName}>
        {children}
      </HeadingComponent>
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
            <ReactMarkdown
              components={{
                code: renderCodeBlock,
                h1: CustomHeading,
                h2: CustomHeading,
              }}
            >
              {text}
            </ReactMarkdown>
          </span>
        </PostTextContainer>
      </BodyContainer>
    </>
  )
}
