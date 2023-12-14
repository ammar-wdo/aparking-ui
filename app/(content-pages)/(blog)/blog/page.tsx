
import React from 'react'

import CategoryFeed from './(components)/category-feed'
import BlogFeed from './(components)/blog-feed'

type Props = {}

const page =async (props: Props) => {

  
 

 

 

  return (
    <div className='min-h-[700px]'>
        <div className='container'>
            <CategoryFeed />
            <BlogFeed />

        </div>
    </div>
  )
}

export default page