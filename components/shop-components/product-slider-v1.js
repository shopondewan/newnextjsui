import React, { Component } from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import Slider from 'react-slick';
// import lightcase from 'lightcase'
// import $ from 'jQuery'
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
class ProductSliderV1 extends Component {

	render() {

		let publicUrl = '/'
		const settings = {
			rtl: false,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '450px',
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,
			responsive: [
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '250px',
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '200px',
					}
				},
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '150px',
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: false,
						centerPadding: '0px',
					}
				},
				{
					breakpoint: 580,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: false,
						centerPadding: '0px',
					}
				}
			]
		}

		return <div className="ltn__img-slider-area mb-90">
			<div className="container-fluid">
				<Slider {...settings} className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/31.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/31.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/32.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/32.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/33.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/33.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/34.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/34.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/35.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/35.jpg"} alt="Image" />
							</a>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	}
}

export default ProductSliderV1