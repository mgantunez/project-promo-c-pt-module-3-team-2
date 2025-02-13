import '../styles/App.scss';

import Header from './Header';
import Footer from './Footer';
import Landing from './Pages/Landing';
import CreatePage from './Pages/CreatePage'
import { Route, Routes, Link } from "react-router";

function App() {
  return (

    <div className="container">

      <Header />

      <main>

      

        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path='create' element={<CreatePage />}></Route>
          <Route path="*" element={
            <div className="detail"><p className="detail__title">Error 404 - Página no encontrada</p>
              <Link to="/" className="detail__returnBtn">
                Volver a la home
              </Link>
            </div>
          }></Route>
        </Routes>

      </main>

      <Footer />

    </div>

  )
}

export default App;
