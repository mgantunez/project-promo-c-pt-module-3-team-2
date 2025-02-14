function Form({ projectData, setProjectData }) {

    const handleFileChange = (event, field) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProjectData({ ...projectData, [field]: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="addForm">
            <h2 className="title">Información</h2>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>

                <input className="addForm__input" type="text" name="name" placeholder="Nombre del proyecto"
                    value={projectData.name} onChange={(e) => setProjectData({ ...projectData, name: e.target.value })} />

                <input className="addForm__input" type="text" name="slogan" placeholder="Slogan"
                    value={projectData.slogan} onChange={(e) => setProjectData({ ...projectData, slogan: e.target.value })} />

                <input className="addForm__input" type="text" name="technologies" placeholder="Tecnologías"
                    value={projectData.technologies} onChange={(e) => setProjectData({ ...projectData, technologies: e.target.value })} />

                <input className="addForm__input" type="url" name="repo" placeholder="Repositorio"
                    value={projectData.repo} onChange={(e) => setProjectData({ ...projectData, repo: e.target.value })} />

                <input className="addForm__input" type="url" name="demo" placeholder="Demo"
                    value={projectData.demo} onChange={(e) => setProjectData({ ...projectData, demo: e.target.value })} />

                <textarea className="addForm__input" name="desc" placeholder="Descripción" rows="5"
                    value={projectData.desc} onChange={(e) => setProjectData({ ...projectData, desc: e.target.value })}></textarea>
            </fieldset>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre la autora</legend>

                <input className="addForm__input" type="text" name="autor" placeholder="Nombre"
                    value={projectData.autor} onChange={(e) => setProjectData({ ...projectData, autor: e.target.value })} />

                <input className="addForm__input" type="text" name="job" placeholder="Trabajo"
                    value={projectData.job} onChange={(e) => setProjectData({ ...projectData, job: e.target.value })} />
            </fieldset>

            <fieldset className="addForm__group--upload">
                <label className="button">
                    Subir foto del proyecto
                    <input className="addForm__hidden" type="file" onChange={(e) => handleFileChange(e, "photo")} />
                </label>

                <label className="button">
                    Subir foto de la autora
                    <input className="addForm__hidden" type="file" onChange={(e) => handleFileChange(e, "image")} />
                </label>

                <button className="button--large">Guardar proyecto</button>
            </fieldset>
        </form>
    );
}

export default Form;

