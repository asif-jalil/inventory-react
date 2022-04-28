import React from 'react';

const PageTitle = ({title}) => {
  return (
    <div className='py-4 px-6 font-bold text-xl border-b border-neutral-400'>
      { title}
    </div>
  );
};

export default PageTitle;