import React from 'react';
import { InfoBox } from '../index';
import { response } from '../Global/Response';
import { useTranslation } from 'react-i18next';

const LabtopProgramming = () => {
    const { t } = useTranslation()
    return (
        <section className={`${response.containerBox} my-12`}>
            <InfoBox title={t('laptop.title2')} style={`bg-orange-oranges`} />
        </section>
    );
}

export default LabtopProgramming;
