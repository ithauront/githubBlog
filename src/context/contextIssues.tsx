import React, { ReactNode, useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface IssueProps {
  title: string
  text: string
  number?: number
  date: string
  onClick?: () => void
  comments: number
}

interface GithubIssue {
  title: string
  body: string
  number: number
  updated_at: string // chose the update_at and not the create to reflect the last time the issues was used.
  comments: number
}

interface IssueContextType {
  issues: IssueProps[]
  setIssues: React.Dispatch<React.SetStateAction<IssueProps[]>>
  fetchIssuesBySearchForm: (query: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/Ithauront/githubBlog/issues',
        )
        const issuesData = response.data
        const extractedIssues = issuesData.map((issuesData: GithubIssue) => ({
          number: issuesData.number,
          title: issuesData.title,
          text: issuesData.body,
          date: formatDistanceToNow(new Date(issuesData.updated_at), {
            addSuffix: true,
            locale: ptBR,
          }),
          comments: issuesData.comments,
        }))
        setIssues(extractedIssues)
      } catch (error) {
        console.error(error)
      }
    }
    fetchIssues()
  }, [])

  const fetchIssuesBySearchForm = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:iThauront/githubBlog`,
      )
      const searchedIssuesData = response.data.items
      const searchedIssues = searchedIssuesData.map(
        (searchedIssuesData: GithubIssue) => ({
          number: searchedIssuesData.number,
          title: searchedIssuesData.title,
          text: searchedIssuesData.body,
          date: formatDistanceToNow(new Date(searchedIssuesData.updated_at), {
            addSuffix: true,
            locale: ptBR,
          }),
          comments: searchedIssuesData.comments,
        }),
      )
      setIssues(searchedIssues)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(issues)
  }, [issues])

  const issueContextValue: IssueContextType = {
    issues,
    setIssues,
    fetchIssuesBySearchForm,
  }
  return (
    <IssuesContext.Provider value={issueContextValue}>
      {children}
    </IssuesContext.Provider>
  )
}
