import React from 'react';

const AllCharacteristics = ({character}) => {
    // 
    return (
        <div className='w-8/12 font-raleway'>
            <h3 className='text-black-topBlack text-base font-bold mb-5'>{character.title}</h3>
            <div className="flex justify-between">
                <p className='text-base text-gray-lightGray'>{character.keys}</p>
                <div className="flex-1 border-dashed border-b-2 border-stone-300"></div>
                <span className='text-black-topBlack text-base font-bold'>{character.values}</span>
            </div>
        </div>
    );
}

export default AllCharacteristics;
