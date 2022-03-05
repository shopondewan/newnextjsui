import React, { Component } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import Slider from "react-slick";
function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style }}
			onClick={onClick}
		>
			<i class="fas fa-arrow-right" alt="Arrow Icon"></i>
		</div>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, }}
			onClick={onClick}
		>
			<i class="fas fa-arrow-left" alt="Arrow Icon"></i>
		</div>
	);
}
class TestimonialV2 extends Component {

	render() {

		let publicUrl = '/'
		let imagealt = 'image'
		const settings = {
			arrows: true,
			dots: false,
			centerMode: false,
			centerPadding: '80px',
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 580,
					settings: {
						arrows: false,
						dots: true,
						centerMode: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		}

		return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65" style={{
			backgroundImage: `url("/assets/img/bg/23.jpg")`
		}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center---">
							<h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Client,s Testimonial</h6>
							<h1 className="section-title white-color">See What,s Our Client <br />
								Says About Us</h1>
						</div>
					</div>
				</div>

				<Slider {...settings} className="row ltn__testimonial-slider-6-active slick-arrow-3">
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/1.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>Jacob William</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/2.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>Kelian Anderson</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/3.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>Adam Joseph</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/4.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>James Carter</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					{/*  */}
				</Slider>
			</div>
		</div >

	}
}

export default TestimonialV2