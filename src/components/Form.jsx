import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Form({ projectData, setProjectData }) {
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        const savedProjectData = localStorage.getItem("projectData");
        if (savedProjectData) {
            setProjectData(JSON.parse(savedProjectData));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("projectData", JSON.stringify(projectData));
    }, [projectData]);

    const handleFileChange = (ev, field) => {
        const file = ev.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProjectData({ ...projectData, [field]: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setProjectData({ ...projectData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!projectData.name) newErrors.name = "El nombre del proyecto es obligatorio";
        if (!projectData.slogan) newErrors.slogan = "El slogan es obligatorio";
        if (!projectData.technologies) newErrors.technologies = "Las tecnologías son obligatorias";
        if (!projectData.repo || !/^https?:\/\/.+/.test(projectData.repo)) newErrors.repo = "El repositorio debe ser una URL válida";
        if (!projectData.demo || !/^https?:\/\/.+/.test(projectData.demo)) newErrors.demo = "La demo debe ser una URL válida";
        if (!projectData.desc) newErrors.desc = "La descripción es obligatoria";
        if (!projectData.autor) newErrors.autor = "El nombre de la autora es obligatorio";
        if (!projectData.job) newErrors.job = "El trabajo es obligatorio";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (validateForm()) {
            alert("Proyecto guardado con éxito");
        }
    };

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <h2 className="title">Información</h2>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
                <input className="addForm__input" type="text" name="name" placeholder="Nombre del proyecto" value={projectData.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
                
                <input className="addForm__input" type="text" name="slogan" placeholder="Slogan" value={projectData.slogan} onChange={handleChange} />
                {errors.slogan && <span className="error">{errors.slogan}</span>}
                
                <input className="addForm__input" type="text" name="technologies" placeholder="Tecnologías" value={projectData.technologies} onChange={handleChange} />
                {errors.technologies && <span className="error">{errors.technologies}</span>}
                
                <input className="addForm__input" type="url" name="repo" placeholder="Repositorio" value={projectData.repo} onChange={handleChange} />
                {errors.repo && <span className="error">{errors.repo}</span>}
                
                <input className="addForm__input" type="url" name="demo" placeholder="Demo" value={projectData.demo} onChange={handleChange} />
                {errors.demo && <span className="error">{errors.demo}</span>}
                
                <textarea className="addForm__input" name="desc" placeholder="Descripción" rows="5" value={projectData.desc} onChange={handleChange}></textarea>
                {errors.desc && <span className="error">{errors.desc}</span>}
            </fieldset>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre la autora</legend>
                <input className="addForm__input" type="text" name="autor" placeholder="Nombre" value={projectData.autor} onChange={handleChange} />
                {errors.autor && <span className="error">{errors.autor}</span>}
                
                <input className="addForm__input" type="text" name="job" placeholder="Trabajo" value={projectData.job} onChange={handleChange} />
                {errors.job && <span className="error">{errors.job}</span>}
            </fieldset>

            <fieldset className="addForm__group--upload">
                <label className="button">
                    Subir foto del proyecto
                    <input className="addForm__hidden" type="file" onChange={(ev) => handleFileChange(ev, "photo")} />
                </label>

                <label className="button">
                    Subir foto de la autora
                    <input className="addForm__hidden" type="file" onChange={(ev) => handleFileChange(ev, "image")} />
                </label>

                <button className="button--large" type="submit">Guardar proyecto</button>
            </fieldset>
        </form>
    );
}

Form.propTypes = {
    projectData: PropTypes.object.isRequired,
    setProjectData: PropTypes.func.isRequired,
};

export default Form;
