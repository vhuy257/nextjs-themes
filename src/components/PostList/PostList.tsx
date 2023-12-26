'use client'
import React, {useState} from 'react'
import { usePosts } from '@/hooks/usePokemon'

const PostList = () => {
    const [postCount, setPostCount] = useState(10)
    const { data, isPending, isFetching } = usePosts(postCount)

    if (isPending) return <div>Loading</div>

    return (
        <section>
            <ul>
                {data?.map((post, index) => (
                <li key={post.id}>
                    <div>
                    <span>{index + 1}. </span>
                    <a href="#">{post.title}</a>
                    </div>
                </li>
                ))}
            </ul>
            {postCount <= 90 && (
                <button
                onClick={() => setPostCount(postCount + 10)}
                disabled={isFetching}
                >
                {isFetching ? 'Loading...' : 'Show More'}
                </button>
            )}
        </section>
    )
}

export default PostList