import React from 'react'
import Hero from './Component/hero'
import { client } from '@/sanity/lib/client'

const  Homepage = async() => {
  const query = `*[_type == 'blogs'] | order(_updatedAt asc){
  Title,
    Paragraph,
     "slug": slug.current,
    Image
}`

const data:Blogs[] = await client.fetch(query)


  return ( 

    <div>
    { data.map((data :Blogs) => (  
       <Hero data={data} key={data.slug} />
      ))
     }
      
    </div>
  )
}

  

export default Homepage
