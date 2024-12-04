import "../styles/gallery.css"


const Gallery = () => {
    return(
        <section id="gallery-home">
            <div className="gallery-home-content">
                <h2 className="gallery-title">MSA Gallery</h2>

                <div className="gallery-year-container">
                    <div className="gallery-preview-btn-container">
                        <button>2024</button>
                        <button>2023</button>
                    </div>
                    <div className="gallery-preview-container">
                            <div className="preview"></div>
                            <div className="preview"></div>
                            <div className="preview"></div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;