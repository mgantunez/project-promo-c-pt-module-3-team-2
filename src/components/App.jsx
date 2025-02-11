import '../styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Form from './Form';

function App() {
  return (

    <div className="container">

      <Header />

      <main className="main">

        <Hero />

        <Form />



      </main>

      <Footer />


    </div>

  )
}

export default App;
