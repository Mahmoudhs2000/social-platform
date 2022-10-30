import React from 'react'
import Post, { TypePost } from './Post';
type Props = {}

function PostsFeed({}: Props) {
    const posts: TypePost[] = [
        {
          author: 'Jhon Doe',
          profImg: 'https://loremflickr.com/g/320/240/paris,girl/all',
          content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
          media: ['https://loremflickr.com/g/320/220/paris/all', 'https://loremflickr.com/g/320/210/paris/all', 'https://loremflickr.com/g/320/200/paris/all'],
          date: '22 May 2020'
        },
        {
          author: 'Mark David',
          profImg: 'https://loremflickr.com/g/320/240/paris/all',
          content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
          media: ['https://loremflickr.com/320/240/brazil,rio', 'https://loremflickr.com/g/310/240/paris/all'],
          date: '12 January 2020'
        },
        {
          author: 'Mark David',
          profImg: 'https://loremflickr.com/g/320/240/paris/all',
          content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
          media: ['https://loremflickr.com/320/240/BMW,bugatti'],
          date: '12 January 2020'
        },
    ]
  return (
    <div>
        {
            posts.map(({author, media, content,date, profImg}: TypePost) => <Post date={date} author={author} content={content} media={media} profImg={profImg} />)
        }
    </div>
  )
}

export default PostsFeed;