import React from 'react';
import './ImageSection.css';

const ImageSection = () => {
    return (
        <div className="section">
            <div className="image-container">
                <img src="/images/image1.png" alt="Imagem 1" className="image" />
                <img src="/images/image2.png" alt="Imagem 2" className="image" />
                <img src="/images/image3.png" alt="Imagem 3" className="image" />
                <img src="/images/image4.png" alt="Imagem 4" className="image" />
            </div>
        </div>
    );
}

export default ImageSection;
