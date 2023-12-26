import PostList from '@/components/PostList/PostList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <h1 className="my-8 text-2xl">Tanstack nextjs test</h1>
        <PostList/>
    </main>
  )
}
