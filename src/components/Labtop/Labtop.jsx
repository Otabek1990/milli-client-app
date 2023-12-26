import React from 'react';
import { InfoBox } from '../index';
import { response } from '../Global/Response';
import { useTranslation } from 'react-i18next';

const Labtop = () => {
    const { t } = useTranslation()
    return (
        <section className={`${response.containerBox} my-12`}>
            <InfoBox title={t('laptop.title1')} style={`bg-blue-labtopBack`} />
        </section>
    );
}

export default Labtop;
