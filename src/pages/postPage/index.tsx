import { useState, useEffect } from 'react'
import { BodyContainer } from '../../components/profile/styles'
import { PostTextContainer, PostTitle } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function PostPage() {
  const location = useLocation()
  const { title, date, comments, url } = location.state
  const [formattedText, setFormattedText] = useState('')
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

  useEffect(() => {
    const apiText =
      '  Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to   list the built-in data structures available in JavaScript and what   properties they have. These can be used to build other data   structures. Wherever possible, comparisons with other languages are   drawn.<br /> # Dynamic typing <br /> JavaScript is a loosely typed and dynamic  language. Variables in JavaScript are not directly associated with any   particular value type, and any variable can be assigned (and   re-assigned) values of all types: `let foo = 42; // foo is now a number <br />foo = &apos;bar&apos; // foo is now a string <br />foo = true; // foo is now   a boolean`'
    const firstSentence = apiText.match(/^(.*?[.?!…]+)/)
    let restOfText = apiText

    if (firstSentence) {
      firstSentence.forEach((sentence) => {
        const styledFirstSentence = `<strong>${sentence}</strong>`
        restOfText = apiText.replace(sentence, styledFirstSentence)
      })
    }

    const titles = restOfText.match(/#+\s+([\s\S]+?)(?=<br \/>|$)/g)
    let restOfTextTitlesStyled = restOfText
    if (titles) {
      titles.forEach((title) => {
        const titleWithoutMarker = title.slice(1)
        const styledTitle = `<div>${titleWithoutMarker}</div>`
        restOfTextTitlesStyled = restOfTextTitlesStyled.replace(
          title,
          styledTitle,
        )
      })
    }
    const codeBlocks = restOfTextTitlesStyled.match(/`(.*?)`/g)
    let restOfTextTitlesAndCodeBlocksStyled = restOfTextTitlesStyled
    if (codeBlocks) {
      codeBlocks.forEach((codeBlock) => {
        const codeWithoutBackticks = codeBlock.slice(1, -1)
        const styledCodeBlock = `<pre>${codeWithoutBackticks}</pre>`
        restOfTextTitlesAndCodeBlocksStyled =
          restOfTextTitlesAndCodeBlocksStyled.replace(
            codeBlock,
            styledCodeBlock,
          )
      })
    }

    setFormattedText(restOfTextTitlesAndCodeBlocksStyled)
  }, [])

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
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
        </PostTextContainer>
      </BodyContainer>
    </>
  )
}
