import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import React, { useState, useEffect, useCallback } from "react";
// import logo192 from "..//assets/logo192.png";

function UpNavbar() {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <>
      {/* <div className="drawer pa-5">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div>
        
      </div> */}
      <div className="navbar drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex-none">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className='menu  p-4 w-80 min-h-full bg-base-200 text-base-content'>
            <div className="flex justify-center items-center mb-2">
              <img className="w-1/6 h-auto " src="/logo192.png" alt="image description" />
              <h5 className="text-white w-5/6 ml-2">DaisyUI</h5>
            </div>
            <ul className=" text-white">
              {myArray.map(name => (
                <li>
                  <details>
                    <summary>{name}</summary>
                    {name.children.length > 0 ?
                      <ul>
                        <li><a>level 2 item 1</a></li>
                        <li><a>level 2 item 2</a></li>
                        <li>
                          <details open>
                            <summary>Parent</summary>
                            <ul>
                              <li><a>level 3 item 1</a></li>
                              <li><a>level 3 item 2</a></li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                      :
                      null
                    }
                  </details>
                </li>
              ))}
            </ul>


            
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white">DaisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <FiLogOut onClick={logOut} className="text-white" />
        </button>
      </div>
    </div >
    </>
  );
}

export default UpNavbar;