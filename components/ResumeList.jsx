import React from 'react';
import { capitalizeEachWordFirstLetterInString } from '../utils';
import Resume from './Resume';

const ResumeList = ({ id, data }) => {
  return (
    <div className='resume pb-10 md:pb-16' id={id}>
      <h2 className='font-black font-poppins text-indigo-600 text-3xl mb-4 md:text-4xl md:mb-6'>
        {capitalizeEachWordFirstLetterInString(id)}
      </h2>
      {data?.length > 0 &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              // ${
              //   data?.length !== index + 1 &&
              //   'pb-4 mb-4 md:pb-6 md:mb-6 border-solid border-b-2 border-neutral-300'
              // }
              className={`pb-4 mb-4 md:pb-6 md:mb-6 border-solid border-b-[1px] border-neutral-300`}
            >
              <Resume resume={item} />
            </div>
          );
        })}
    </div>
  );
};

export default ResumeList;
