import React, { ReactNode, useState, createContext } from 'react'

interface Issue {
  title: string
  text: string
}

interface IssueContextType {
  issues: Issue[]
  setIssues: React.Dispatch<React.SetStateAction<Issue[]>>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const issueContextValue: IssueContextType = {
    issues,
    setIssues,
  }
  return (
    <IssuesContext.Provider value={issueContextValue}>
      {children}
    </IssuesContext.Provider>
  )
}
