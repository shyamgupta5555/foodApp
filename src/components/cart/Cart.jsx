import React from "react";
import s from "../../assets/images/svg/nonveg.svg";
import { IoIosAdd } from "react-icons/io";
import l from "../../assets/images/product/rp1.png"
import d from "../../assets/images/svg/dots-design.svg"
import h from "../../assets/images/home.png"


function Cart() {
  return (
    <div>
      <header className="section-t-space">
        <div className="custom-container">
          <div className="header-panel">
            <a href="details.html">
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <h2>Starbucks</h2>
          </div>
        </div>
      </header>

      <section>
        <div className="custom-container">
          <h3 className="fw-semibold dark-text">Food Categories</h3>
          <div className="horizontal-product-box mt-3">
            <div className="product-img">
              <img
                className="img-fluid img"
                src={l}
                alt="rp1"
              />
            </div>
            <div className="product-content">
              <h5>Mexican Shred Beef</h5>
              <h6>Hot beef stick</h6>
              <div className="plus-minus">
                <IoIosAdd />
                <input type="number" value="1" min="1" max="10" />
                <i className="ri-add-line add"></i>
              </div>
              <img
                className="red-symbol"
                src={s}
                alt="non-veg"
              />
              <h3 className="product-price">$40</h3>
            </div>
          </div>

          
        </div>
      </section>

     

      {/* <!-- Coupon section start --> */}
      <section>
        <div class="custom-container">
          <a href="coupon.html" className="apply-coupon">
            <div>
              <h5 className="dark-text">Apply Coupon</h5>
              <h6 className="coupon-code">#GOOGLE20</h6>
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </section>

      {/* <!-- Bill details section start --> */}

      <section className="bill-details">
        <div className="custom-container">
          <h3 className="fw-semibold dark-text">Bill Details</h3>
          <div className="total-detail mt-3">
            <div className="sub-total">
              <h5>Sub Total</h5>
              <h5 className="fw-semibold">$58</h5>
            </div>
            <h5 className="mt-3 dark-text">Delivery Charge (2 kms)</h5>
            <h5 className="free">Free</h5>
            <h6 className="delivery-info light-text mt-2">
              Save $5 on Delivery fee by ordering above $30
            </h6>
            <div className="sub-total pb-3">
              <h5>Discount (20%)</h5>
              <h5 className="fw-semibold">$9.6</h5>
            </div>
            <div className="grand-total">
              <h5 className="fw-semibold">Grand Total</h5>
              <h5 className="fw-semibold amount">$48.4</h5>
            </div>
            <img
              className="dots-design"
              src={d}
              alt="dots"
            />
          </div>
        </div>
      </section>
      {/* <!-- Bill details section end --> */}

      {/* <!-- delivery address section start --> */}
      <section className="delivery address section-lg-b-space">
        <div className="custom-container">
          <h3 className="fw-semibold dark-text">Delivery Address</h3>
          <div className="cart-add-box mt-3 mb-5">
            <div className="add-img">
              <img
                className="img-fluid img"
                src={h}
                alt="rp1"
              />
            </div>
            <div className="add-content">
              <h5 className="fw-semibold dark-text">Deliver to : Home</h5>
              <h6 className="address light-text mt-1">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </h6>
              <a href="address.html" className="change-add">
                Change
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
