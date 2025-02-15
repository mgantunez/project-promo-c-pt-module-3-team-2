import PropTypes from "prop-types";
import ImageEditor from "./ImageEditor";

function Form({ projectData, setProjectData }) {

    const handleFileChange = (ev, field) => {
        const file = ev.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProjectData((prevData) => ({
                    ...prevData,
                    [field]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        } else {
            console.error("El archivo seleccionado no es una imagen válida.");
        }
    };

    const handleSaveImage = (croppedImg, isAuthorPhoto) => {
        setProjectData((prevData) => ({
            ...prevData,
            [isAuthorPhoto ? "image" : "photo"]: croppedImg,
        }));
    };

    const handleDeleteImage = (field) => {
        setProjectData((prevData) => ({
            ...prevData,
            [field]: "",
        }));
    };

    return (
        <form className="addForm">
            <h2 className="title">Información</h2>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>

                <input className="addForm__input" type="text" name="name" placeholder="Nombre del proyecto"
                    value={projectData.name} onChange={(ev) => setProjectData({ ...projectData, name: ev.target.value })} />

                <input className="addForm__input" type="text" name="slogan" placeholder="Slogan"
                    value={projectData.slogan} onChange={(ev) => setProjectData({ ...projectData, slogan: ev.target.value })} />

                <input className="addForm__input" type="text" name="technologies" placeholder="Tecnologías"
                    value={projectData.technologies} onChange={(ev) => setProjectData({ ...projectData, technologies: ev.target.value })} />

                <input className="addForm__input" type="url" name="repo" placeholder="Repositorio"
                    value={projectData.repo} onChange={(ev) => setProjectData({ ...projectData, repo: ev.target.value })} />

                <input className="addForm__input" type="url" name="demo" placeholder="Demo"
                    value={projectData.demo} onChange={(ev) => setProjectData({ ...projectData, demo: ev.target.value })} />

                <textarea className="addForm__input" name="desc" placeholder="Descripción" rows="5"
                    value={projectData.desc} onChange={(ev) => setProjectData({ ...projectData, desc: ev.target.value })}></textarea>
            </fieldset>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre la autora</legend>

                <input className="addForm__input" type="text" name="autor" placeholder="Nombre"
                    value={projectData.autor} onChange={(ev) => setProjectData({ ...projectData, autor: ev.target.value })} />

                <input className="addForm__input" type="text" name="job" placeholder="Trabajo"
                    value={projectData.job} onChange={(ev) => setProjectData({ ...projectData, job: ev.target.value })} />
            </fieldset>

            <fieldset className="addForm__group--upload">
                <label className="button">
                    Subir foto del proyecto
                    <input
                        className="addForm__hidden"
                        type="file"
                        onChange={(ev) => handleFileChange(ev, "photo")} />
                </label>

                {projectData.photo && (
                    <button type="button" className="button--delete" onClick={() => handleDeleteImage("photo")}>
                        Borrar foto del proyecto
                    </button>
                )}

                <label className="button">
                    Subir foto de la autora
                    <input
                        className="addForm__hidden"
                        type="file"
                        onChange={(ev) => handleFileChange(ev, "image")} />
                </label>

                {projectData.image && (
                    <button type="button" className="button--delete" onClick={() => handleDeleteImage("image")}>
                        Borrar foto de la autora
                    </button>
                )}

                <button className="button--large">Guardar proyecto</button>
            </fieldset>

            {/* Mostrar el editor si hay una imagen subida */}
            {projectData.photo && (
                <ImageEditor
                    imageSrc={projectData.photo}
                    onSave={(croppedImg) => handleSaveImage(croppedImg, false)}
                    isAuthorPhoto={false} />
            )}

            {projectData.image && (
                <ImageEditor
                    imageSrc={projectData.image}
                    onSave={(croppedImg) => handleSaveImage(croppedImg, true)}
                    isAuthorPhoto={true} />
            )}
        </form>
    );
}

Form.propTypes = {
    projectData: PropTypes.shape({
        name: PropTypes.string,
        slogan: PropTypes.string,
        technologies: PropTypes.string,
        repo: PropTypes.string,
        demo: PropTypes.string,
        desc: PropTypes.string,
        autor: PropTypes.string,
        job: PropTypes.string,
        image: PropTypes.string,
        photo: PropTypes.string
    }).isRequired,
    setProjectData: PropTypes.func.isRequired,
};

export default Form;

