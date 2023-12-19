import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormBuilder from './components/FormBuilder';
import Editform from './components/Editform';
// import Createform from './components/Createform';
// import Viewform from './components/Viewform';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/edit" element={<Editform />} />
        {/* <Route path="/create" element={<Createform/>} />
        <Route path="/edit/:id" element={<Editform/>} />
        <Route path="/delete/:id" element={<Deleteform/>} />
        <Route path="/:id" element={<Viewform/>} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react'
// // import Header from "./Header";
// // import {Table,Button} from 'react-bootstrap';
// // import axios from 'axios'
// import '../App.css'
// import {ApiUrls} from '../ApiService'
// function Home() {
//   const [data, setData] = useState("")
// //   const [clicked, setIsclicked] = useState(false)
//   useEffect(() => {
//       ApiUrls.get_all_forms(data)
//       .then(Response => {
//         console.log("1111111111111111111111111111")
//         return Response.data
//       }).then(data => {
//         setData(data)
//       })

//   }, [data])

// //   const getData = () => {
// //     console.log(data,"..........data................")
// //     setIsclicked(true)
// //   }

// const handleClick = () => {
//     window.location.href = 'create';
//   };

//   return (
//     <div className='main-page'>
//       <h2> Welcome to Form builder </h2>
//       <p>This is a simple form builder .</p>
//       <button className="createButton" onClick={handleClick} >CREATE NEW FORM</button>
//       <hr></hr>
//       {/* data got forms list */}
//     </div>
//   )
// }

