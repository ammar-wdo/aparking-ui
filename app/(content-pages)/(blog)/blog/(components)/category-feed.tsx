import { GET_CATEGORIES } from '@/links'
import axios from 'axios'
import React from 'react'

type Props = {}

const CategoryFeed = async(props: Props) => {

    const res = await axios(GET_CATEGORIES)

    const categories = res.data.categories

  return (
    <div>CategoryFeed</div>
  )
}

export default CategoryFeed