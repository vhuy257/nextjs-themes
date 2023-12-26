import ky from 'ky'
import { useQuery } from '@tanstack/react-query'
import { apiUrl } from '@/lib/utils'

const fetchPosts = async (limit = 10) => {
  const parsed: any[] = await ky(`https://jsonplaceholder.typicode.com/posts`).json()
  return parsed.filter((x : { id: number}) => x.id <= limit)
}

const usePosts = (limit: number) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
  })
}

export { usePosts, fetchPosts }