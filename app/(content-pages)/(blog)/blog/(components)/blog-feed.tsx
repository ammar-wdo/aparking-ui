import { GET_BLOGS } from '@/links'
import axios from 'axios'
import React from 'react'

type Props = {}

const BlogFeed = async (props: Props) => {

    const res = await axios(GET_BLOGS)

    const blogs = res.data.blogs
    console.log(blogs)

  return (
    <div>BlogFeed</div>
  )
}

export default BlogFeed