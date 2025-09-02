

const Home = () => {
    
    return (
        <div>
            <div className="carousel w-full  h-96">
                <div id="slide1" className="carousel-item relative w-full  h-96">
                    <img
                        src="https://cdn.pixabay.com/photo/2014/09/18/11/56/skyscrapers-450793_960_720.jpg"
                        className="w-full  h-96" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full  h-96">
                    <img
                        src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
                        className="w-full  h-96" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full  h-96">
                    <img
                        src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg"
                        className="w-full  h-96" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full  h-96">
                    <img
                        src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                        className="w-full  h-96" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;