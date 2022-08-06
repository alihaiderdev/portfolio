// import React from 'react';

// const EducationExperienceAward = ({
//   sectionHeading,
//   //   info: { icon, duration, title, school, description },
// }) => {
//   return <section>{sectionHeading && <h2>{sectionHeading}</h2>}</section>;
// };

// export default EducationExperienceAward;

import React from 'react';

const Resume = ({
  resume: {
    titleOrPosition,
    workspaceOrCompany,
    startDate,
    endDate,
    city,
    country,
    companyDescription,
    achievementsOrTasks,
    contactPerson,
    contactInfo,
  },
}) => {
  return (
    <div className='resume'>
      <div className='flex justify-between items-center'>
        <h2 className='font-black font-poppins sm:text-2xl md:text-3xl sm:py-1 md:py-2'>
          {titleOrPosition}
        </h2>
        {city && country && (
          <span className='font-poppins'>
            {city} / {country}
          </span>
        )}
      </div>

      <h6 className='font-black font-poppins sm:text-lg md:text-xl'>
        {workspaceOrCompany}
      </h6>
      {companyDescription && (
        <p className='text-neutral-400'>{companyDescription}</p>
      )}

      {/* {contactInfo && contactPerson && (
        <ul className='text-neutral-400'>
          <li>
            <span className='text-indigo-600 font-poppins'>
              Contact Person:{' '}
            </span>
            {contactPerson}
          </li>
          <li>
            <span className='text-indigo-600 font-poppins'>Contact Info: </span>
            {contactInfo}
          </li>
        </ul>
      )} */}

      <div className='flex justify-between sm:py-1 md:py-2'>
        <h6 className='text-indigo-600 font-poppins sm:text-lg md:text-xl'>
          Achievements/Tasks
        </h6>
        <span className='text-indigo-600 font-poppins sm:text-sm md:text-lg'>
          {startDate} / {endDate ? endDate : 'Present'}
        </span>
      </div>

      <p className='text-neutral-400'>{achievementsOrTasks}</p>

      {/* <ul className='text-neutral-400 list-decimal'>
        {achievementsOrTasks.split(',')?.map((li, index) => {
          return (
            <li key={index} className='marker:text-indigo-600'>
              {li}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Resume;
