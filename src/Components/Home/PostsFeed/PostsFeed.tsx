import React from 'react'
import Post, { TypePost } from './Post';
type Props = {}

function PostsFeed({}: Props) {
    const posts: TypePost[] = [
        {
          author: 'Jhon Doe',
          profImg: 'https://picsum.photos/200',
          content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
          media: ['https://picsum.photos/320', 'https://picsum.photos/220', 'https://picsum.photos/240'],
          date: '22 May 2020'
        },
        {
          author: 'Mark David',
          profImg: 'https://picsum.photos/400',
          content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
          media: ['https://picsum.photos/280/280', 'https://picsum.photos/300'],
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