import React from 'react';
import { Input } from '../index';
import { milliyIcons } from '../../Assets';
import { useTranslation } from 'react-i18next';

const Search = () => {
    const { t } = useTranslation()
    return (
        <div className='relative md:w-[350px] w-full'>
            <span className='absolute right-5 top-2'>{milliyIcons.search}</span>
            <Input types={'text'} placeholders={`${t('header.search')}`} style={'text-base md:bg-gray-50 bg-white-Default text-gray-lightGray px-5 py-2 text-raleway outline-none border rounded focus:ring-1 focus:ring-green-Default'} />
        </div>
    );
}

export default Search;
