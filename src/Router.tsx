import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/blog'
import { PostPage } from './pages/postPage'
import { DefaultLayout } from './layouts/LayoutDefault'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
