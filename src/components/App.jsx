import { useState, useEffect } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Landing from './Pages/Landing';
import Form from './Form';
import Preview from './Preview';
import { Route, Routes, Link } from "react-router-dom";

function App() {

  const [error, setError] = useState('');

  const [projectUrl, setProjectUrl] = useState('');

  const [projectData, setProjectData] = useState(() => {
    const savedData = localStorage.getItem('projectData');
    return savedData ? JSON.parse(savedData) : {
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
    };
  });

  useEffect(() => {
    if (projectData.name) { // Evitar guardar vacíos innecesarios
      localStorage.setItem('projectData', JSON.stringify(projectData));
    }
  }, [projectData]);

  //FETCH 
  const handleSubmit = (ev) => {
    ev.preventDefault();

    const previousProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const newProject = { ...projectData, dateAdded: new Date().toISOString() };
    localStorage.setItem("lastProject", JSON.stringify(newProject));
    const allProjects = [...previousProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(allProjects));

    fetch('https://dev.adalab.es/api/projectCard/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData),
    })
      .then(response => response.json())
      .then((responseData) => {
        //En teoria nos responde el servidor

        if (responseData.success === false) {
          setError(responseData.error);
        } else {
          setProjectUrl(responseData.cardURL);
        }

        console.log("Servidor respondió:", responseData);
      })

  }


  return (
    <>
      {" "}
      <div className="container">
        <Header />

        <main>
          <Routes>

            <Route index element={<Landing />} />

            <Route path="create"
              element={<div className="createPage">
                 {/* Preview should show the last project */}
                <Preview projectData={JSON.parse(localStorage.getItem('lastProject')) || projectData} />
                <Form projectData={projectData} setProjectData={setProjectData} handleSubmit={handleSubmit} error={error} projectUrl={projectUrl} />
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
  );
}

export default App;