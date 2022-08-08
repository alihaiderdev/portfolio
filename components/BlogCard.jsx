import Link from 'next/link';
import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';

const BlogCard = ({
  blog: { slug, image, title, date, comments, publishedBy, description },
}) => {
  return (
    <Link href={slug} passHref>
      <a>
        {image && (
          <img
            className='h-[300px] w-full object-fill'
            src={image}
            alt={title}
          />
        )}
        <h2 className='py-4 leading-6 text-lg'>{title}</h2>
        <span className='flex items-center text-indigo-600 font-semibold text-base pb-4'>
          {date} <span className='mx-4'>{publishedBy}</span>
          <MdOutlineMessage size={22} />
          {comments}
        </span>
        <p className='text-neutral-400'>{description}</p>
      </a>
    </Link>
  );
};

export default BlogCard;
