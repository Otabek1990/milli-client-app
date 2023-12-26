import React from 'react';
import { EmptyImg } from '../../Assets';

const Empty = () => {
    return (
        <div className='flex items-center justify-center h-[60vh]'>
            <img src={EmptyImg} alt="empty" />
        </div>
    );
}

export default Empty;
