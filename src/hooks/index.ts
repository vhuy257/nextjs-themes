import { useQuery } from '@tanstack/react-query'
import { kyOriginalApi, buildQueryHomePage, buildFooter } from '@/lib/utils'

type ResponseData = {
  data: any[]
  medata: any
  error?: any
}

const useHomePage = (limit?: number) => {
  return useQuery({
    queryKey: ['index', limit],
    queryFn: async () => {
      const  data : ResponseData = await kyOriginalApi.get(`home-page?${buildQueryHomePage()}`).json()
      return data
    },
  })
}


const useFooter = () => {
  return useQuery({
    queryKey: ['footer'],
    queryFn: async () => {
      const  data : ResponseData = await kyOriginalApi.get(`footer?${buildFooter()}`).json()
      return data.data
    },
  })
}

export { useHomePage, useFooter }