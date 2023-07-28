import React, { useEffect } from 'react';
import Banner1 from "../../assets/images/banner/banner1.png";
import Banner2 from "../../assets/images/banner/banner2.png";
import Banner3 from "../../assets/images/banner/banner3.png";
import Swiper from 'swiper';
import './swiper.css';

function Banner() {
  useEffect(() => {
    new Swiper('.banner1', {
     
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="banner-section section-t-space">
      <div className="custom-container">
        <div className="swiper banner1">
          <div className="swiper-wrapper">
            <div className="swiper-slide" >
              <img className="img-fluid banner-img" style={{gap :"50px"}} src={Banner1} alt="banner1" />
            </div>

            <div className="swiper-slide">
              <div className="home-banner2">
                <img className="img-fluid banner-img" src={Banner2} alt="banner2" />
              </div>
            </div>

            <div className="swiper-slide">
              <img className="img-fluid banner-img" src={Banner3} alt="banner3" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
