import { useQuery } from '@tanstack/react-query'
import { kyOriginalApi, buildQueryPopulate } from '@/lib/utils'

type ResponseData = {
  data: any[]
  medata: any
  error?: any
}

const useRestaurant = (limit?: number) => {
  return useQuery({
    queryKey: ['restaurant', limit],
    queryFn: async () => {
      const data: ResponseData = await kyOriginalApi.get(`restaurants?${buildQueryPopulate()}`).json()
      return data
    },
  })
}

export { useRestaurant }