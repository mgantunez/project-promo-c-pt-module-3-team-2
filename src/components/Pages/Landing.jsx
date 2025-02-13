import { Link } from "react-router";

function Landing() {

    return (
        <>

<section className="hero">
            <h1 className="title">Proyectos molones</h1>
            <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
            <Link to="/create" className="button--link" >Nuevo Proyecto</Link>
        </section>
        </>
    )
}

export default Landing;