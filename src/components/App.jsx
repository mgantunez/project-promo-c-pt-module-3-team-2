import { useState, useEffect } from "react";

import "../styles/App.scss";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Pages/Landing";
import Form from "./Form";
import Preview from "./Preview";

import { Route, Routes, Link } from "react-router";

// const storedData = localStorage.getItem("projectData");
// const UserForm = () => { const [name, setName] = useState("")};

// useEffect(() => {
//   const savedName = localStorage.getItem("username");
//   if (savedName) {
//     setName(savedName);
//   }
// }, []);
// // Guardar el nombre en localStorage cuando cambie
// const handleChange = (e) => {
//   const newName = e.target.value;
//   setName(newName);
//   localStorage.setItem("username", newName);
// };

function App() {
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

  return (
    <>
      {" "}
      <div className="container">
        <Header />

        <main>
          <Routes>
            <Route index element={<Landing />} />

            <Route
              path="create"
              element={
                <div className="createPage">
                  <Preview projectData={projectData} />
                  <Form
                    projectData={projectData}
                    setProjectData={setProjectData}
                    // storedData={storedData}
                  />
                </div>
              }
            />

            <Route
              path="*"element={
                <div>
                  <p>Error 404 - Página no encontrada</p>
                  <Link to="/" className="button">
                    Volver a la home
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
