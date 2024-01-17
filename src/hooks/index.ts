import { useQuery, useMutation } from '@tanstack/react-query'
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

const useConfig = () => {
  return useQuery({
    queryKey: ['config'],
    queryFn: async () => {
      const data: ResponseData = await kyOriginalApi.get(`config?populate=*`).json()
      return data.data
    }
  })
}

const useCreateReservation = () => {
  return useMutation({
    mutationFn: async (reservationItem) => {
      console.log(reservationItem, 'reservationItem')

      const data: ResponseData = await kyOriginalApi.post(`reservations`,{
        json: {
          data: reservationItem
        }
      }).json();

      return data.data
    }
  })
}

const useMenuPage = () => {
  return useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const data: ResponseData = await kyOriginalApi.get(`our-menu?populate=*`).json()
      return data
    }
  })
}

export { useHomePage, useFooter, useConfig, useCreateReservation, useMenuPage }