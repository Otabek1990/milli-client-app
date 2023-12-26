import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants";
import { Context } from "../../App";
import { useAddToBasketMutation } from "../../services/basketApi";

const Login = () => {
  const [addToBasket] = useAddToBasketMutation()
  const { setAccess, setRefresh, state, dispatch, setUserName } = useContext(Context)
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(`${baseUrl}api/v1/user/token/`, {
        phone_number: phoneNumber,
        password: password,
      });
      setError(null)

      setAccess(response.data.access)
      setRefresh(response.data.refresh)
      setUserName(response?.data?.first_name)
      if (state?.cart?.length > 0) {
        const datas = state?.cart?.map(item => {
          return { id: item.id, quantity: item.quantity }
        })
        addToBasket({ basketItem: datas, access: response?.data?.access })
          .then(res => {

            dispatch({ type: "EMPTY_CART" })

          })


        // axios.post(`${baseUrl}api/v1/product/cart/`,datas, {
        //   headers: {
        //     Authorization: `Bearer ${response?.data?.access}`,
        //   },
        // })


      }
      navigate(-1)


    } catch (error) {
      setError('Неверный пароль или логин')
    }
  };
  return (
    <section className="flex justify-center items-center py-14 font-raleway">
      <form className="w-[436px] p-7 bg-white-whites rounded-[10px] flex flex-col gap-y-7" onSubmit={handleLogin}>
        <h1 className="text-2xl font-semibold">Войдите в свою учетную запись</h1>
        <div className="flex flex-col gap-y-5">
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`w-full px-5 py-2 rounded-md border-2 ${error ? 'border-red-500' : 'border-gray-400'} focus:outline-none text-xl`}
            required
            placeholder="Ваш номер телефона"
          />
          <div className="flex flex-col">

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-5 py-2 rounded-md border-2 ${error ? 'border-red-500' : 'border-gray-400'} focus:outline-none text-xl`}
              required
              placeholder="Пароль"
            />
            {error &&
              <p className="text-red-500">{error}</p>
            }
          </div>
        </div>
        <div className="">
          {/* <div class="flex items-center mb-6">
            <div class="flex items-center">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-5 h-5 border border-gray-300 rounded bg-gray-50 accent-green-Default "
                required
              />
            </div>
            <label
              for="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Запомнить меня
            </label>
          </div> */}
          <Link className="text-green-Default" to={"/reset_pass"}>Забыли пароль?</Link>
        </div>
        <button
          disabled={!password && !phoneNumber ? true : false}
          type="submit"
          className={password && phoneNumber ? "bg-green-Default rounded text-base text-white-Default py-2" : "w-full text-gray-600 bg-gray-300 text-white py-2 rounded-lg mx-auto mb-6"}
        >
          Войти
        </button>
        <span className="text-gray-500 text-sm">
          У вас нет аккаунта? <Link className="text-green-Default" to={"/register"}>Зарегистрируйтесь</Link>
        </span>
      </form>
    </section>
  );
};

export default Login;
