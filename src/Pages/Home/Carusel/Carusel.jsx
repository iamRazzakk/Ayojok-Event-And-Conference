import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className=''>
            <Slider {...settings}>
                <div>
                    <img src="../1-2.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="../2-2.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="../3-2.jpg" alt="Image 3" />
                </div>
            </Slider>
        </div>
    );
};


export default MyCarousel;
