import React, { useContext, useEffect } from 'react'
import { Context } from '../../App';
import { useTranslation } from 'react-i18next';

function Alert() {
    const { openAlert, setOpenAlert } = useContext(Context)
    const { t } = useTranslation()
    useEffect(() => {
        if (openAlert) {
            setTimeout(() => {
                setOpenAlert(false);
            }, 3000);
        }
    }, [openAlert]);
    return (<>
        <div className={`w-full md:max-w-sm max-w-[22.5rem] mx-auto my-2 overflow-hidden rounded shadow-2xl fixed top-0 right-0 z-[99999] transition-transform duration-300 ${openAlert ? "-translate-x-2" : "translate-x-96"}`}>
            <div className="relative flex items-center justify-between px-2 py-2 font-bold text-white-Default bg-green-Default rounded-t">
                <div className="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="inline w-6 h-6 mr-2 opacity-75">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('order.success')}</span>
                </div>
                <span className="relative">
                    <button onClick={() => setOpenAlert(false)}>
                        <svg className="w-5 h-5 text-green-300 fill-current hover:text-white" role="button"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <title>Close</title>
                            <path
                                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </button>
                </span>
            </div>
            <div className="p-3 bg-white-Default border border-gray-300 rounded-b shadow-lg">
                <span className="block text-gray-600">{t('order.alert')}!</span>
            </div>
        </ div>
    </>

    )
}

export default Alert