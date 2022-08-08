import React from 'react';

const SkillProgressSlider = ({ data: { skill, percent } }) => {
  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <span className='tracking-wide'>{skill}</span>
        <span className='tracking-wide'>{percent}%</span>
      </div>
      <div className='bg-neutral-300 h-[0.6rem] rounded mt-2'>
        <div
          className='bg-indigo-600 h-[0.6rem] rounded'
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgressSlider;
