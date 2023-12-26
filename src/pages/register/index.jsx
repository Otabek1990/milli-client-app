import React, { useState } from 'react';
import Logo from '../../Assets/Images/Logo.png';
import axios from 'axios';
// import InnForm from './InnForm';
import { ColorRing } from 'react-loader-spinner';
import InnForm from './InnForm';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants';

function Register() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState();
  const [clientData, setClientData] = useState(null);
  const [error, setError] = useState('');


  const registerHandler = (e) => {
    e.preventDefault();
    const forma = new FormData(e.target);
    const data = Object.fromEntries(forma.entries());
    const body = { ...data, json_data: clientData };
    

    axios
      .post(`${baseUrl}api/v1/proposal/`, body)
      .then((res) => {
        if (res?.data?.status) {
          alert("Sizning so'rovingiz yuborildi.")
          navigate("/")
        };
        e.target.reset();
        setClientData(null);
      })
      .catch((err) => console.log(err))
  };
  return (
    <div className="flex items-center justify-center my-14">
      <div className="max-w-md w-full px-6 py-6 bg-white-whites rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Зарегистрируйтесь в системе
        </h1>
        <form
          onSubmit={registerHandler}
          className="flex flex-col items-start gap-3"
        >
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="w-full px-5 py-2 rounded-md border-2 border-gray-400 focus:outline-none text-lg"
            required
            placeholder="Имя"
          />

          <input
            type="text"
            id="last_name"
            name="last_name"
            className="w-full px-5 py-2 rounded-md border-2 border-gray-400 focus:outline-none text-lg"
            required
            placeholder="Фамилия"
          />

          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            className="w-full px-5 py-2 rounded-md border-2 border-gray-400 focus:outline-none text-lg"
            required
            placeholder="Ваш номер телефона"
          />

          {/* {showInn && ( */}
          <InnForm
            setClientData={setClientData}
            clientData={clientData}
            company={company}
            setError={setError}
            setLoading={setLoading}
            setCompany={setCompany}
          />

          {loading && (
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          )}
          <div className="mt-[-10px]">
            {error && <h1>{error}</h1>}
            {clientData?.inn && (
              <div>
                <h1 className='text-base'>{clientData?.fullName}</h1>
              </div>
            )}
            {clientData?.inn === "" && <h1 className='text-red-500'>Клиент не найден</h1>}
          </div>
          {/* <input
            type="tel"
            id="password"
            name="password"
            className="w-full px-5 py-2 rounded-md border-2 border-gray-400 focus:outline-none text-xl"
            required
            placeholder="Парол"
          /> */}
          <div className="flex items-center gap-2 my-2">
            <input type="checkbox" className='text-green-Default bg-green-Default w-6 h-6 cursor-pointer' />
            <label className='text-sm font-normal text-gray-400'>Я согласен с <span className='text-gray-800'>политикой конфиденциальности</span> и условиями пользование.</label>
          </div>
          <button
            disabled={clientData?.inn.length > 0 ? false : true}
            type="submit"
            className={clientData?.inn.length > 0 ? "w-full text-white-Default bg-green-Default text-white py-2 rounded-lg mx-auto mb-6" : "w-full text-gray-600 bg-gray-300 text-white py-2 rounded-lg mx-auto mb-6"}
          >
            Зарегистрируйтесь
          </button>
        </form>
        <Link className=' text-green-Default' to={"/login"}>Уже есть аккаунт</Link>
      </div>
    </div>
  );
}

export default Register;
