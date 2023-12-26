import React from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
    return (
        <section className="flex justify-center items-center py-14 font-raleway">
            <form className="w-[436px] p-7 bg-white-whites rounded-[10px] flex flex-col gap-y-7">
                <h1 className="text-2xl font-semibold">Восстановление пароля</h1>
                <div className="flex flex-col gap-y-5">
                    <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className={`w-full px-5 py-2 rounded-md border-2 focus:outline-none text-xl`}
                        required
                        placeholder="Ваш номер телефона"
                    />
                </div>
                <button type="submit" className="bg-green-Default rounded text-base text-white-Default py-2">
                    Отправить
                </button>
                <span className="text-gray-500 text-sm">
                    У вас нет аккаунта? <Link className="text-green-Default" to={"/register"}>Зарегистрируйтесь</Link>
                </span>
            </form>
        </section>
    )
}

export default ResetPassword