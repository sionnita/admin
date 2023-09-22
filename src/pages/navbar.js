
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
import React, { useState, useEffect, useCallback } from "react";
import { getMenu } from '../slices/menu';
// import logo192 from "..//assets/logo192.png";



function UpNavbar() {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  });
  dispatch(getMenu())

  const { menu } = useSelector(state=>state)
  const myArray= menu
  
  const MenuLoad = (data)=>{
    return  (
      <li key={data.id}>
      <details>
        <summary>{data.nama}</summary>
        <ul>
        {data.children.map(dataChild => (
          <div>{dataChild.children ? 
            <div>{MenuLoad(dataChild)}</div>
            :
            
          <li key={dataChild.id}><a>{dataChild.nama}</a></li>}
          </div>
          ))}
        </ul>
      </details>
    </li>
    )
    
  }



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
              {myArray.map(datas => (
                <li key={datas.id}>
                    {datas.children ?
                    <div>{MenuLoad(datas)}</div>
                   
                      :
                        <summary>{datas.nama}</summary>
                    }
                </li>
              )
              )}
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