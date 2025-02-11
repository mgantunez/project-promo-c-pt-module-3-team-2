function Form() {
    return (
        <form className="addForm">
            <h2 className="title">Información</h2>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>

                <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" />
                <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" />

                <div className="addForm__2col">
                    <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" />
                    <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" />
                </div>

                <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" />
                <textarea className="addForm__input" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
            </fieldset>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre la autora</legend>
                <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" />
                <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" />
            </fieldset>

            <fieldset className="addForm__group--upload">
                <label className="button">
                    Subir foto del proyecto
                    <input className="addForm__hidden" type="file" />
                </label>
                <label className="button">
                    Subir foto de la autora
                    <input className="addForm__hidden" type="file" />
                </label>
                <button className="button--large">Guardar proyecto</button>
            </fieldset>
        </form>
    );
}

export default Form;
