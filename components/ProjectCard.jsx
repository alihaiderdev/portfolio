import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project: { slug, image, title, category } }) => {
  return (
    <Link href={slug} passHref>
      <a>
        <div
          className='project_card w-full h-[17.5rem] object-cover bg-center bg-cover transition ease-in-out delay-150 duration-1000'
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className='overlay opacity-0 bg-indigo-600 w-full h-full grid place-items-center -z-10'>
            <div className='text-center text-white'>
              <h2 className='font-poppins text-lg leading-6'>{title}</h2>
              <h6 className='uppercase tracking-wider font-semibold pt-2 md:pt-4'>
                {category}
              </h6>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
