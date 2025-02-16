import { useState, useEffect } from 'react';

import '../styles/App.scss';

import Header from './Header';
import Footer from './Footer';
import Landing from './Pages/Landing';
import Form from './Form';
import Preview from './Preview';

import { Route, Routes, Link } from "react-router";

function App() {

  //FETCH 

  

  const [projectData, setProjectData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
    
  });

    //FETCH 
  const handleSubmit =() =>{
    fetch('https://dev.adalab.es/api/projectCard/', {
      method:'POST' ,
      header:{'content-Type': 'application(json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData=>{
      
    } )
  }


  return (
    <>    <div className="container">

      <Header />

      <main>

        <Routes>

          <Route index element={<Landing />} />

          <Route path="create" 
            element={<div className="createPage">
                <Preview projectData={projectData} />
                <Form projectData={projectData} setProjectData={setProjectData}handleSubmit={handleSubmit}  /> 
              </div>
            } />

          <Route path="*"
            element={
              <div>
                <p>Error 404 - Página no encontrada</p>
                <Link to="/" className="button">
                  Volver a la home
                </Link>
              </div>
            } />

        </Routes>

      </main>

      <Footer />

    </div >
    </>

  )
}

export default App;
