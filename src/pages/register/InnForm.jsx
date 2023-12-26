import axios from 'axios'
import React, { useEffect } from 'react'

function InnForm({ setClientData, company, setError, setLoading, setCompany }) {

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            // Limit the input to 9 digits
            const limitedValue = inputValue.slice(0, 9);
            setCompany(limitedValue);
        }
    };
    const innCheckFetching = () => {
        setLoading(true);

        axios.get(`https://stage.didox.uz/v1/profile/${Number(company)}`)
            .then(res => {
                setClientData(res?.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err?.message);
                setLoading(false);
            });
    }

    useEffect(() => {
        // Trigger API fetch when the length of company is 9
        if (company?.length === 9) {
            innCheckFetching();
        }
    }, [company]);
    return (
        <div className="flex flex-col w-full">
            <div className='flex justify-between w-full gap-2'>
                <input
                    type="number"
                    id="inn"
                    name="inn"
                    className="w-full px-5 py-2 rounded-md border-2 border-gray-400 focus:outline-none text-lg"
                    required
                    placeholder="ИНН"
                    
                    onChange={handleInputChange}
                    value={company}
                />
                <button
                    className={
                        company?.length === 9
                            ? 'bg-green-Default text-white-Default px-2 rounded-md border-1 border-green-Default'
                            : 'bg-gray-300 text-gray-600 rounded-md border-1 px-2'
                    }
                    disabled={company?.length !== 9}
                    onClick={innCheckFetching}
                    type='button'
                >
                    Проверка
                </button>
            </div>
        </div>
    )
}

export default InnForm