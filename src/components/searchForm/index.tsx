import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'

import { IssuesContext } from '../../context/contextIssues'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFromInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssuesBySearchForm } = useContext(IssuesContext)

  const { register, handleSubmit, getValues } = useForm<SearchFromInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const onSubmit = () => {
    const { query } = getValues()
    fetchIssuesBySearchForm(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
