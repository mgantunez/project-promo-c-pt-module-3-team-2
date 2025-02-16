import { useState, useEffect } from 'react';

import '../styles/App.scss';

import Header from './Header';
import Footer from './Footer';
import Landing from './Pages/Landing';
import Form from './Form';
import Preview from './Preview';

import { Route, Routes, Link } from "react-router";

function App() {

  const [error,setError]=useState('');
  

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
  const handleSubmit =(ev) =>{
    ev.preventDefault(); 

    fetch('https://dev.adalab.es/api/projectCard/', {
      method:'POST' ,
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(projectData),
    })
    .then(response => response.json())
    .then((responseData) => {
      //En teoria nos responde el servidor

      if(responseData.success === false){
        setError= (responseData.error);
      }

      console.log("Servidor respondió:", responseData);
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
                <Form projectData={projectData} setProjectData={setProjectData}handleSubmit={handleSubmit} error={error}  /> 
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
