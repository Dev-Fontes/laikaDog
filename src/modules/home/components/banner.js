import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImgUm from "../../../assets/homeImages/banner_um.jpg";
import ImgDois from "../../../assets/homeImages/banner_dois.jpg";
import ImgTres from "../../../assets/homeImages/banner_tres.jpg";
import { CarouselCustom } from "./styled";

export const Banner = () => {
  return (
    <CarouselCustom>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        width={700}
      >
        <div>
          <img alt="Doggo" src={ImgUm} />
        </div>
        <div>
          <img alt="Doggo" src={ImgDois} />
        </div>
        <div>
          <img alt="Doggo" src={ImgTres} />
        </div>
      </Carousel>
    </CarouselCustom>
  );
};
