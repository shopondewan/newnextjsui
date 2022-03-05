import React, { Component } from 'react';
import Link from 'next/link';
import Sidebar from './sidebar';
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
class BlogSlider extends Component {
	constructor(props) {
		super(props);
		this.slider1 = null;

	}

	render() {
		let publicUrl = '/'
		let customClass = this.props.customClass ? this.props.customClass : ''
		let sectionClass = this.props.sectionClass ? this.props.sectionClass : ''
		const settings = {
			dots: true,
			arrows: true,
			infinite: true,
			autoplay: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,

			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: false,
						dots: true
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: false,
						dots: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: false,
						dots: true
					}
				},
				{
					breakpoint: 575,
					settings: {
						arrows: false,
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		}
		return (
			<div className={"ltn__blog-area pt-115--- pb-70 go-top " + sectionClass}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className={"section-subtitle ltn__secondary-color " + customClass}>News &amp; Blogs</h6>
								<h1 className="section-title">Leatest News Feeds</h1>
							</div>
						</div>
					</div>
					<Slider {...settings}
						className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"

						ref={slider => (this.slider1 = slider)}
					>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link href="/blog-details"><a><img src={publicUrl + "assets/img/blog/1.jpg"} alt="#" /></a></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										<ul>
											<li className="ltn__blog-author">
												<Link href="/team-details"><a><i className="far fa-user" />by: Admin</a></Link>
											</li>
											<li className="ltn__blog-tags">
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Interior</a></Link>
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Decorate</a></Link>
											</li>
										</ul>
									</div>
									<h3 className="ltn__blog-title"><Link href="/blog-details">10 Brilliant Ways To Decorate Your Home</Link></h3>
									<div className="ltn__blog-meta-btn">
										<div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date"><a><i className="far fa-calendar-alt" />June 24, 2021</a></li>
											</ul>
										</div>
										<div className="ltn__blog-btn">
											<Link href="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link href="/blog-details"><a><img src={publicUrl + "assets/img/blog/2.jpg"} alt="#" /></a></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										<ul>
											<li className="ltn__blog-author">
												<Link href="/team-details"><a><i className="far fa-user" />by: Admin</a></Link>
											</li>
											<li className="ltn__blog-tags">
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Interior</a></Link>
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Interior</a></Link>
											</li>
										</ul>
									</div>
									<h3 className="ltn__blog-title"><Link href="/blog-details">The Most Inspiring Interior Design Of 2021</Link></h3>
									<div className="ltn__blog-meta-btn">
										<div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
											</ul>
										</div>
										<div className="ltn__blog-btn">
											<Link href="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link href="/blog-details"><a><img src={publicUrl + "assets/img/blog/3.jpg"} alt="#" /></a></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										<ul>
											<li className="ltn__blog-author">
												<Link href="/team-details"><a><i className="far fa-user" />by: Admin</a></Link>
											</li>
											<li className="ltn__blog-tags">
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Interior</a></Link>
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Estate</a></Link>
											</li>
										</ul>
									</div>
									<h3 className="ltn__blog-title"><Link href="/blog-details">Recent Commercial Real Estate Transactions</Link></h3>
									<div className="ltn__blog-meta-btn">
										<div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
											</ul>
										</div>
										<div className="ltn__blog-btn">
											<Link href="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link href="/blog-details"><a><img src={publicUrl + "assets/img/blog/3.jpg"} alt="#" /></a></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										<ul>
											<li className="ltn__blog-author">
												<Link href="/team-details"><a><i className="far fa-user" />by: Admin</a></Link>
											</li>
											<li className="ltn__blog-tags">
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Interior</a></Link>
												<Link href="/blog-grid"><a><i className="fas fa-tags" />Estate</a></Link>
											</li>
										</ul>
									</div>
									<h3 className="ltn__blog-title"><Link href="/blog-details">Recent Commercial Real Estate Transactions</Link></h3>
									<div className="ltn__blog-meta-btn">
										<div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
											</ul>
										</div>
										<div className="ltn__blog-btn">
											<Link href="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}

						{/* Blog Item */}

						{/*  */}
					</Slider>
				</div>
			</div>
		)
	}
}

export default BlogSlider;
