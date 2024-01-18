import Homepage from "@/components/restaurant/grand-house/Homepage/Homepage"
import { API_URL, buildQueryHomePage } from "@/lib/utils"

export default async function Home() {
  const res: any = await fetch(`${API_URL}/home-page?${buildQueryHomePage()}`, { 
      next: { revalidate: 10 }
  })
  const data = await res.json()

  return (
    <main className="flex flex-col items-center justify-between bg-[--main-background-color]">
      <Homepage data={data}/>
    </main>
  )
}
