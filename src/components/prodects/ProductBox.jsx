import React, { useState } from "react";
import CardData from "../cardData";
import { RiStarFill, RiAddLine, RiSubtractLine } from "react-icons/ri";
import d from "../../assets/images/svg/nonveg.svg";
import a from "../../assets/images/product/rp2.png";



function ProductBox() {
  return (
    <div>
      <section className="food-list-section section-b-space">
        <div className="custom-container">
          <div className="list-box">
            <h3 className="fw-semibold dark-text" style={{fontSize :"30px" , color :"gray"}}>Order Now </h3>
            <div
              className="accordion food-accordion"
              id="accordionPanelsStayOpenaccordion1"
            >
              <div className="accordion-item">
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >

                  <div className="accordion-body">
                    {CardData.map((ele, id) => {
                      return (
                        <div
                          className="product-box2 "
                          style={{ marginBottom: "30px" }}
                        >
                          <div className="product-content">
                            <img className="img" src={d} alt="non-veg" />
                            <h5 className="product-name">{ele.name}</h5>
                            <div className="d-flex align-items-center gap-1">
                              <ul className="rating-stars">
                                <li>
                                  <RiStarFill className="stars" />
                                </li>
                                <li>
                                  <RiStarFill className="stars" />
                                </li>
                                <li>
                                  <RiStarFill className="stars" />
                                </li>
                                <li>
                                  <RiStarFill className="stars" />
                                </li>
                                <li>
                                  <RiStarFill className="stars" />
                                </li>
                              </ul>
                              <h5 className="dark-text">1k+ Rating</h5>
                            </div>
                            <div className="product-price">
                              <h6 className="fw-semibold">
                                <span>₹{ele.price}</span>
                              </h6>
                            </div>
                            <p className="mb-0 mt-2 pt-2">
                              A super easy Mexican style shred beef
                              cooked...Read More
                            </p>
                          </div>
                          <div className="product-img">
                            <img
                              className="img-fluid img"
                              src={ele.img}
                              alt="rp1"
                              style={{ width: "120px", height: "120px" }}
                            />

                            <div className="add-btn">
                              <a
                                className="btn btn-outline"
                                data-bs-target="#add-product"
                                data-bs-toggle="modal"
                              >
                                <RiAddLine /> ADD
                              </a>
                            </div>
                            <div className="plus-minus">
                              <RiSubtractLine className="sub" />
                              <input type="number" value="1" min="1" max="10" />
                              <RiAddLine className="add" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>


            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductBox;
