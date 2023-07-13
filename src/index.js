import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { Home } from './Components/Home';
import { ContactUs } from './Components/ContactUs';
import { ListProduct } from './Components/ListProduct'; 
import ErrorPage from './Components/ErrorPage';
import { ListEmp } from './Components/ListEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Components/EmployeeDisplay';
import EmployeeEdit from './Components/EmployeeEdit'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='Home' element={<Home/>} />
          <Route path='ContactUs' element={<ContactUs/>}/>
          <Route path='ListProduct' element={<ListProduct/>}/>
          <Route path='ListEmployee' element={<ListEmp/>}/>
          <Route path='emp/:id' element={<Employee/>}/> 
          <Route path='empedit/:id' element={<EmployeeEdit/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Route> 
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
