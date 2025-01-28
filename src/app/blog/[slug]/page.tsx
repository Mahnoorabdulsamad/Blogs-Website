import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import CommentSeaction from '@/app/Component/comment'

export default async function page({params:{slug}}:{params:{slug:string}}) {
  const query = `*[_type == 'blogs' && slug.current == "${slug}"]
  {
  Title,Paragraph,Image,block
  }[0]`

     const data = await client.fetch(query)
     
  return (
    <article className='mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8'>
        <h1 className=' font-extrabold text-3xl'>{data.Title}

        </h1>

        <Image src={urlFor(data.Image).url()} alt="c" width={720} height={400} className='rounded '/>

        <section>
            <h1 className='text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary mb-4'> Summary</h1>
<p> {data.Paragraph}</p>

      <CommentSeaction />
        </section>


      
    </article>
  )
}
