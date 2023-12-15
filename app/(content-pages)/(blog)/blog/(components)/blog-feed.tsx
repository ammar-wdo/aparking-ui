import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GET_BLOGS } from '@/links'
import { Blog } from '@/schemas'
import axios from 'axios'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import queryString from 'query-string'
import React from 'react'

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
}

const BlogFeed = async ({searchParams}: Props) => {

    const url = queryString.stringifyUrl({
        url:GET_BLOGS,
        query:{category:searchParams.category}
    })

    const res = await axios(url)

    type FullBlog = Blog & {id:string,createdAt:Date,category:{label:string}}

    const blogs = res.data.blogs as FullBlog[]
  

  return (
    <div className='mt-8'>


        <div className='mt-2'>
            {!blogs.length &&<p className='text-4xl text-center text-neutral-500 font-bold'>No blogs</p>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8'>
                {blogs.map((blog)=><Card key={blog.id} className='flex-col flex border-none overflow-hidden rounded-sm'>
                    <CardHeader className='p-0'>
                        <div className='relative w-full aspect-video '>
                            <Badge className='absolute z-10 text-[10px] rounded-lg font-normal bg-site capitalize cursor-default hover:bg-site top-3 left-3'>{blog.category.label}</Badge>
                            <Image alt='blog-image' fill src={blog.featuredImage} className='object-cover'/>

                        </div>
                    </CardHeader>
                    <CardContent className='bg-white'>
                        <CardTitle className='mt-4 text-slate-600 first-letter:capitalize'>
                            {blog.title}
                        </CardTitle>
                        <CardDescription className='line-clamp-4 text-sm text-slate-500 mt-2'>
                            {blog.shortDescription}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex items-center justify-between mt-auto'>
                        <span className='text-xs text-slate-500'>{format(new Date(blog.createdAt),'MMMM do yyyy')}</span>
                        <Link className='font-semibold text-slate-500 text-sm ' href={`/blog/${blog.slug}`}>Read more</Link>

                    </CardFooter>
                </Card>)}
            </div>
        </div>
    </div>
  )
}

export default BlogFeed