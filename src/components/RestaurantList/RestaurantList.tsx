'use client'
import React, {useState} from 'react'
import { useRestaurant } from '@/hooks/useRestaurant'
import { Button } from '../ui/button'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const PostList = () => {
    const { data, isPending, isFetching }: any = useRestaurant()

    if (isPending) return <div>Loading</div>

    return (
        <section>
            <ul>
                {data?.data.map((post: any, index: number) => {
                    const content: BlocksContent = post.attributes.description;
                    const categories = post?.attributes?.categories;
                    
                    return (    
                        (
                            <li key={index}>
                                <div>
                                    <Link href="#" className='font-semibold block'>{index + 1}. {post.attributes.name}</Link>                    
                                    {categories?.data.map(
                                        (k: any, index: number) => <Badge variant={'destructive'} key={index} className="my-3">{k.attributes.name}</Badge>
                                    )}
                                    <BlocksRenderer 
                                        content={content}
                                        blocks={{
                                            paragraph: ({ children }) => <p className="text-neutral-900 max-w-prose">{children}</p>,
                                            heading: ({ children, level }) => {
                                              switch (level) {
                                                case 1:
                                                  return <h1>{children}</h1>
                                                case 2:
                                                  return <h2>{children}</h2>
                                                case 3:
                                                  return <h3>{children}</h3>
                                                case 4:
                                                  return <h4>{children}</h4>
                                                case 5:
                                                  return <h5>{children}</h5>
                                                case 6:
                                                  return <h6>{children}</h6>
                                                default:
                                                  return <p>{children}</p>
                                              }
                                            },
                                            link: ({ children, url }) => <Link href={url}>{children}</Link>,
                                        }}
                                        modifiers={{
                                            bold: ({ children }) => <strong>{children}</strong>,
                                            italic: ({ children }) => <span className="italic">{children}</span>,
                                        }}
                                    />
                                </div>
                            </li>
                        )
                    )
                })}
            </ul>            
        </section>
    )
}

export default PostList