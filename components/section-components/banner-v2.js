import React, { Component } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Slider from "react-slick";




class BannerV2 extends Component {
  render() {
    let publicUrl = "/";
    let imagealt = "image";
    const settings1 = {
     
      dots: false, /* slider left or right side pagination count with line */
      arrows: false, /* slider arrow  */
      // appendDots: '.ltn__slider-11-pagination-count',
      draggable: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 10000,
      speed: 500,
      // asNavFor: 'ltn__slider-11-img-slide-arrow-active',
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: function (props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      },

      // prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      // nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    const settings2 = {
      dots: false, /* slider left or right side pagination count with line */
      arrows: false, /* slider arrow  */
      appendDots: '.ltn__slider-11-pagination-count',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 10000,
      speed: 500,
      // asNavFor: '.ltn__slider-11-img-slide-arrow-active',
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
      nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }


    return (
      <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1" >
        <div className="ltn__slider-11-inner">
          <Slider {...settings1}
            className="ltn__slider-11-active"
          >
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Search and Find <br />
                            <span>Luxury</span> House
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="/about"
                              className="theme-btn-1 btn btn-effect-1 go-top"
                            >
                              Make An Enquiry
                            </a>
                            <a
                              className="ltn__video-play-btn bg-white"
                              href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                              data-rel="lightcase"
                            >
                              <i className="icon-play  ltn__secondary-color" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/61.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slide-item */}

            {/* slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="/service"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </a>
                            <a
                              href="/about"
                              className="btn btn-transparent btn-effect-3"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/62.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="/service"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </a>
                            <a
                              href="/about"
                              className="btn btn-transparent btn-effect-3"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/63.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title white-color--- animated">
                            <span>
                              <i className="fas fa-home" />
                            </span>{" "}
                            Real Estate Agency
                          </h6>
                          <h1 className="slide-title animated ">
                            Find Your Dream <br /> House By Us
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="/service"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </a>
                            <a
                              href="/about"
                              className="btn btn-transparent btn-effect-3"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img
                          src={publicUrl + "assets/img/slider/64.jpg"}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          {/* slider-4-pagination */}

          {/* slider-sticky-icon */}
          <div className="slider-sticky-icon-2">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          {/* slider-4-img-slide-arrow */}
          <div className="ltn__slider-11-img-slide-arrow">
            <div className="ltn__slider-11-img-slide-arrow-inner">
              <Slider {...settings2}
                className="ltn__slider-11-img-slide-arrow-active"
              >
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/61.jpg"}
                    alt="Flower Image"
                  />
                </div>
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/62.jpg"}
                    alt="Flower Image"
                  />
                </div>
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/63.jpg"}
                    alt="Flower Image"
                  />
                </div>
                <div className="image-slide-item">
                  <img
                    src={publicUrl + "assets/img/slider/64.jpg"}
                    alt="Flower Image"
                  />
                </div>
              </Slider>

            </div>
            {/* slider-4-slide-item-count */}
            <div className="ltn__slider-11-slide-item-count">
              <span className="count" />
              <span className="total" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerV2;
