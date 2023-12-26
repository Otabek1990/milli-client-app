
function Counter({quantity,setQuantity}) {

    return (
        <div className='w-full flex flex-col items-start gap-y-3'>
            <h3 className='text-base font-normal text-gray-lightGray'>Kolichestvo:</h3>
            <div className='flex items-center gap-x-7' >
                <div className='flex items-center gap-x-2'>
                    <button
                        onClick={() => {
                            if (quantity < 2) {
                                setQuantity(1)
                            }
                            else setQuantity(p => p - 1)

                        }}
                        className='py-2 px-4 bg-green-Default rounded text-white-Default text-base w-10 h-10'>
                        -
                    </button>
                    <div className='h-10 w-10 border px-4 py-2 font-bold flex items-center justify-center border-gray-borderGray'>
                        <span>
                            {quantity}
                        </span>
                    </div>
                    <button
                        onClick={() => setQuantity(p => p + 1)}
                        className='py-2 px-4 bg-green-Default rounded text-white-Default text-base w-10 h-10'>
                        +
                    </button>
                </div>
                {/* <span className='font-normal text-base text-red-300'>
                    В наличии 10 шт.
                </span> */}

            </div>
        </div>
    )
}

export default Counter
