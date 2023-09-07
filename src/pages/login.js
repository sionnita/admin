import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputText from '../components/Input/InputText'
import ErrorText from '../components/Typography/ErrorText'
import LoadingLayout from '../containers/LoadingLayout'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/auth";
import { clearMessage, setLoading } from "../slices/message";

// import "../dist/output.css"

import '../App.css';


export default function Login() {
  const { loading } = useSelector((state) => state.message);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleSubmit = async e => {
    e.preventDefault();
    // my_modal_1.showModal()
    dispatch(setLoading(true))
    dispatch(login({ email, password }))
    .unwrap()
    .then(() => {
    dispatch(setLoading(false))
      // navigate("/");
      // window.location.reload();
    })
    .catch(() => {
      setLoading(false);
    });
  }

  const updateFormValue = ({ updateType, value }) => {
    // setErrorMessage("")
    if (updateType == "email") {
      setEmail(value)
    }
    if (updateType == "password") {
      setPassword(value)
    }
    // setLoginObj({...loginObj, [updateType] : value})
  }


  return (
    <>

      {loading ? <LoadingLayout /> : ''}
      <div className="min-h-screen bg-base-200 flex items-center  overflow-y-auto">

        <div className="card mx-auto w-full max-w-2xl  shadow-xl ">

          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center text-primary'>Login</h2>
            
            <ErrorText styleClass="mt-8">{message}</ErrorText>
            <form onSubmit={(e) => handleSubmit(e)}>

              <div className="mb-4">

                <InputText type="emailId" defaultValue={email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />

                <InputText defaultValue={password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />

              </div>

              <div className='text-right text-primary'><span className="text-sm  inline-block  hover:text-info hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span>
              </div>

              <button type="submit" className="btn mt-2 w-full btn-primary">Login</button>

              <div className='text-center mt-4'>Don't have an account yet? <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></div>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}
