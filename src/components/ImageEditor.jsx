import PropTypes from "prop-types";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../utils/crop-utils";

function ImageEditor({ imageSrc, onSave, isAuthorPhoto }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleSave = async () => {
        try {
            if (!croppedAreaPixels) {
                console.error("No se ha seleccionado un área para recortar.");
                return;
            }

            const croppedImg = await getCroppedImg(imageSrc, croppedAreaPixels);
            if (croppedImg) {
                console.log("Imagen recortada generada:", croppedImg); // Verifica en la consola
                onSave(croppedImg); // Llama a la función onSave con la imagen recortada
            }
        } catch (error) {
            console.error("Error al obtener la imagen recortada:", error);
        }
    };

    return (
        <div className="imageEditor__container">
            <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={isAuthorPhoto ? 1 : 16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                cropShape={isAuthorPhoto ? "round" : "rect"}
                showGrid={false}
            />
            <button className="imageEditor__button" onClick={handleSave}>
                Aceptar encuadre
            </button>
        </div>
    );
}

ImageEditor.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired, // Función para manejar la imagen recortada
    isAuthorPhoto: PropTypes.bool.isRequired,
};

export default ImageEditor;