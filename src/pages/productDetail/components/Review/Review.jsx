import React from 'react';
import LeaveComent from './LeaveComent';
import ComentLeft from './ComentLeft';

const Review = () => {
    return (
        <section className='md:w-9/12 w-full'>
            <LeaveComent />
            <ComentLeft />
        </section>
    );
}

export default Review;
