
import {defineType, defineField, defineArrayMember} from 'sanity'
// export const blogs ={
//     name: 'blogs',
//     title: 'Blogs',
//     type: 'document',
//     fields: [
//     {
//         name: 'Title',
//         type: 'string',
//         title:'Title'
//       },

//     {
//         name: 'Paragraph',
//         type: 'text',
//         title: 'Paragraph',
//     },
//     {
//         name: 'slug',
//         type: 'slug',
//         title: 'Slug',
//         options:{
//             source:'Title'
            
//         },
//     },
//     {
//         name: 'Image',
//         type: 'image',
//         title: 'image',
//         options:{
//             hotspot:true
//         },
//     },
//     {
//         title: 'Block',
//         name: 'block',
//         type: 'array',
//         of: [{type: 'block'}]

//     },

    

//     ],
//   }


export const blogs ={
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
    {
        name: 'Title',
        type: 'string',
        title:'Title'
      },

    {
        name: 'Paragraph',
        type: 'text',
        title: 'Paragraph',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options:{
            source:'Title'
            
        },
    },
    {
        name: 'Image',
        type: 'image',
        title: 'image',
        options:{
            hotspot:true
        },
    },
    {
        title: 'Block',
        name: 'block',
        type: 'array',
        of: [{type: 'block'}]

    },

    

    ],
  }