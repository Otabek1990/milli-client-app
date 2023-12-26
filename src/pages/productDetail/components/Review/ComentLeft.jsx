import React from 'react';
import { comment } from './data';
import MapComent from './MapComent';

const ComentLeft = () => {
    return (
        <div className='mt-5 pb-20'>
            {comment?.map((item, ind) => (
                <MapComent key={ind} commentUser={item} />
            ))}
        </div>
    );
}

export default ComentLeft;
