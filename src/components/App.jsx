import '../styles/App.scss';
import { Route, Routes } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Form from './Form';
import Preview from './Preview';

function App() {
  return (

    <div className="container">

      <Header />

      <main className="main">

        <Hero />

        <Preview />

        <Form />

      </main>

      <Footer />

    </div>

  )
}

export default App;
