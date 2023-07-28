import React, { useEffect } from 'react';
import Swiper from 'swiper';
import Pizza from "../../assets/images/product/pizaa.png"
import Berger from "../../assets/images/product/burger.png"
import Bonito from "../../assets/images/product/boritto.png"
import  Noodles  from "../../assets/images/product/noodles.png"
import HotdOg from  "../../assets/images/product/hotdog.png"
import '../Banner/swiper.css';


const FoodCategories = () => {
  useEffect(() => {
    new Swiper('.categories', {
      // Swiper options here...
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="section-t-space">
      <div className="custom-container">
        <div className="title">
          <h3 className="mt-0">Food Categories</h3>
          <a href="categories.html">See All</a>
        </div>

        <div className="swiper categories">
          <div className="swiper-wrapper ratio_square">
            <div className="swiper-slide">
              <a href="listing.html" className="food-categories">
                <img className="img-fluid categories-img" src={Pizza} alt="pizza" />
              </a>
              <h6>Pizza</h6>
            </div>
            <div className="swiper-slide">
              <a href="listing.html" className="food-categories">
                <img className="img-fluid categories-img" src={Berger} alt="burger" />
              </a>
              <h6>Burger</h6>
            </div>
            <div className="swiper-slide">
              <a href="listing.html" className="food-categories">
                <img className="img-fluid categories-img" src={Bonito} alt="boritto" />
              </a>
              <h6>Burrito</h6>
            </div>
            <div className="swiper-slide">
              <a href="listing.html" className="food-categories">
                <img className="img-fluid categories-img" src={HotdOg} alt="hotdog" />
              </a>
              <h6>Hot Dog</h6>
            </div>
            <div className="swiper-slide">
              <a href="listing.html" className="food-categories">
                <img className="img-fluid categories-img" src={Noodles} alt="noodles" />
              </a>
              <h6>Noodles</h6>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;

