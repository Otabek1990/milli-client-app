import React from 'react';

const MapHome = ({data}) => {
    return (
        <div style={{background: `${data.back}`}} className='border border-gray-lightlyGray md:py-5 py-2 md:px-8 px-2 rounded-[10px]'>
            <div className="flex items-center">
                <span className='!h-12 md:!h-[100px] !w-12 md:!w-[100px]'>{data.maxIcon}</span>
                <h3 className='md:ml-5 ml-3 mr-2.5 md:text-2xl text-lg font-semibold'>{data.title}</h3>
                <span>{data.minIcon}</span>
            </div>
            <div className="md:mt-8 mt-4 text-base">
                <p className='text-gray-lightGray'>{data.descTitle}</p>
                <p className='mt-1 text-black-topBlack font-bold'>{data.desc}</p>
            </div>
        </div>
    );
}

export default MapHome;
