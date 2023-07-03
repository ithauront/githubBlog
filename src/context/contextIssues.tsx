import React, { ReactNode, useState, createContext, useEffect } from 'react'
import axios from 'axios'

interface Issue {
  title: string
  text: string
}

interface IssueContextType {
  issues: Issue[]
  setIssues: React.Dispatch<React.SetStateAction<Issue[]>>
  fetchIssues: (query: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:iThauront/githubBlog`,
      )
      setIssues(response.data.items)
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
    fetchIssues,
  }
  return (
    <IssuesContext.Provider value={issueContextValue}>
      {children}
    </IssuesContext.Provider>
  )
}
