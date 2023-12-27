import { useQuery } from '@tanstack/react-query'
import { kyOriginalApi, buildQueryPopulate } from '@/lib/utils'

type ResponseData = {
  data: any[]
  medata: any
  error?: any
}

const useHomePage = (limit?: number) => {
  return useQuery({
    queryKey: ['index', limit],
    queryFn: async () => {
      const  data : ResponseData = await kyOriginalApi.get(`home-page?${buildQueryPopulate()}`).json()
      return data
    },
  })
}

export { useHomePage }