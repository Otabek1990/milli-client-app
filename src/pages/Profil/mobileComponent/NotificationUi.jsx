import React from 'react';

const NotificationUi = ({notification}) => {
    return (
        <div className='mt-5 text-base font-raleway text-left p-2.5 bg-gray-lightlyGray rounded-lg border-2 border-green-Default'>
            <h4 className='text-green-Default font-bold'>{notification.title}</h4>
            <p className='mb-2.5 text-black-topBlack'>{notification.time}</p>
            <p className='text-black-topBlack'>{notification.desc}</p>
        </div>
    );
}

export default NotificationUi;
