import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Style.css"
// import App from './App';
// import Test from './Test';
// import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Mainrouter from './Mainrouter';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  //   {/* <Test/> */}
  // </React.StrictMode>
  <RouterProvider router={Mainrouter}>

  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
