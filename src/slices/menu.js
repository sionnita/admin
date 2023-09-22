import {  createSlice } from "@reduxjs/toolkit";
import MenuService from "../services/menu.service";
import { setMessage } from "./message";


export const menuSlice = createSlice({
    name: 'menu', // ini nama slice
    initialState: {
      menu:[]
    }, // ini nilai awal dari sebuah state/store
    reducers: {
        // ini reducer untuk menambahkan data ke state "todo"
         getMenu: async (state, actions) => {
          try {
            const data = await MenuService.getMenu();
            console.log(data.menu)
            state.menu =data.menu;
          } catch (error) {
            // const message =
            //   (error.response &&
            //     error.response.data &&
            //     error.response.data.message) ||
            //   error.message ||
            //   error.toString();
            //   actions.dispatch(setMessage(message));
            state.menu =[];
          }
  }
           // menyalin/menggabungkan data state sebelumnya dengan state baru
        },
       
    
})

// export action
export const { getMenu } = menuSlice.actions // buat dipanggil dari UI dari "useDispatch()"

// export reducer
export default menuSlice.reducer // dipanggil kalo actionnya ditrigger dari "useDispatch()"