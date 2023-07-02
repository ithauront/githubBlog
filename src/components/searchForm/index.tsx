import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import axios from 'axios'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFromInput = z.infer<typeof searchFormSchema>

type Issue = {
  title: string
  text: string
}

export function SearchForm() {
  const [issues, setIssues] = useState<Issue[]>([])
  const { register, handleSubmit, getValues } = useForm<SearchFromInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const fetchIssues = async () => {
    try {
      const { query } = getValues()
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

  return (
    <SearchFormContainer onSubmit={handleSubmit(fetchIssues)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
