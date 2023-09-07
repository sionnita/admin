import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from 'react-dom/client';
import Sidebar from './pages/sidebar';
import UpNavbar from './pages/navbar';
import Login from './pages/login';
import authHeader from "./services/auth-header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useParams,
  useNavigate
} from 'react-router-dom';

import routes from "./routes";




function App() {

  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser)
  if (!currentUser) {
    return <Login />
  }

  return (

    <Router>
    
              <div class="row" >
                <div class="container-fluid">

                  <div class="row">
                    <div className='col-auto p-0'>

                      {/* <Sidebar /> */}
                    </div>
                    <div className='col p-0'>

                      <UpNavbar />
                      <div className='App'>
                        <Routes>
                        (<Route path="/login" element={<Login />} component={<Login />} />))
                          {routes.map(route =>
                            (<Route path={route.route} element={route.component} component={route.component} />))
                          }
                        </Routes>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Router>

          );
}

          export default App;
