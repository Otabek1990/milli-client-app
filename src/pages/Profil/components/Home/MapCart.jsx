import React from 'react';

const MapCart = ({data}) => {
    return (
        <div style={{background: `${data.back}`}} className={`border border-gray-lightlyGray md:py-5 py-3 md:px-8 px-3 rounded-[10px]`}>
            <h3 className='md:text-2xl sm:text-lg text-base font-semibold'>{data.title}</h3>
            <p className='md:text-base text-xs text-gray-lightGray mt-2.5'>{data.desc}</p>
        </div>
    );
}

export default MapCart;
