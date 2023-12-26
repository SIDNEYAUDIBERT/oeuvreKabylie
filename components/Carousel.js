import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Oeuvre from "./Oeuvre";

const Carousel = ({oeuvres}) => {

  
    console.log("Oevres :",oeuvres)


    const CustomNextArrow = (props) => (
        <div {...props} className="custom-next-arrow">
            <ChevronRight />
        </div>
    );

    const CustomPrevArrow = (props) => (
        <div {...props} className="custom-prev-arrow">
            <ChevronLeft  />
        </div>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className="carousel-container">
           <Slider className="carousel" {...settings}>
                {oeuvres.map((oeuvre) => (
                    <div key={oeuvre.id}>
                        <Oeuvre
                        key={oeuvre.id}
                        imageSrc={oeuvre.image}
                        title={oeuvre.titre}
                        dateCreation={oeuvre.date}
                        prix={oeuvre.prix}
                        periode={oeuvre.periode}
                        id={oeuvre.id}
                    />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
