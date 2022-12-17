import React,{useEffect} from 'react'
import LandingPage from '../Components/LandingPage';
import Navbar from '../Components/Navbar';
import { AiFillPlayCircle } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { FaHorseHead } from "react-icons/fa";
import { BiAnchor } from "react-icons/bi";
import Image from "next/image";
import BM from "../styles/images/about-business-man.jpg";
import Footer from '../Components/Footer';
import Smart1 from "../styles/images/orange-icon-removebg-preview.png";
import Smart2 from "../styles/images/peach-icon-removebg-preview.png";
import Smart3 from "../styles/images/guava-icon-removebg-preview.png";
import Smart4 from "../styles/images/loquat-icon-removebg-preview.png";
import F1 from "../styles/images/orange-service-removebg-preview.png";
import F2 from "../styles/images/peach-removebg-preview.png";
import F3 from "../styles/images/amrood-services-removebg-preview.png";
import F4 from "../styles/images/loquat-services-removebg-preview.png";
import icon1 from "../styles/images/icon1.png";
import icon2 from "../styles/images/icon2.png";
import icon3 from "../styles/images/icon3.png";
import icon4 from "../styles/images/icon4.png";
import food from "../styles/images/why.jpg";
import Product1 from "../styles/images/CaraNavelOgrange.jpg";
import Product2 from "../styles/images/SweetOrange.jpg";
import Product3 from "../styles/images/amrood.jpg";
import Product4 from "../styles/images/loquat.jpg";
import Product5 from "../styles/images/peach.jpg";
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<div>
			<Head>
				<title>About Us</title>
			</Head>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<Navbar />
				<LandingPage
					Name="About Us"
					desc="The company has staff in the professional, technical & administration categories. We are recognized as a supplier of Information & Communication Technology equipment, Softwares and associated products. "
				/>
			</section>
			<section className=" about section">
				<div className="container">
					<div className="row" data-aos="fade-up">
						<div
							className="title text-center wow fadeIn"
							data-wow-duration="1500ms"
						>
							<h2 className="text-black">
								About <span className="color">Us</span>{" "}
							</h2>
							<div className="border"></div>
						</div>

						
					</div>
				</div>
			</section>
			
			<section
				className="u-clearfix u-white usection2"
				id="carousel_ad49"
				data-aos="zoom-in"
			>
				<div className="u-align-center u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-container-style u-custom-item u-list-item u-palette-1-light-1 u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-3">
									Our Vision
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-4">
									<span>
									We believe that buying fresh organic produce should be easy and fun. It should let you live happily and healthily. We also believe that everyone has the right to access non-commercial, fresh, non-GMO food.
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
								<h3
									className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-default u-text-5"
									style={{ color: "white" }}
								>
									Our Mission
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-palette-1-base u-text-6">
									<span className="u-text-body-alt-color">
									Our grand mission includes bringing every organic producer in the Malakand area to the space of e-commerce through our platform and making your access to organic produce a lot easier than ever before. Because it’s all about you!
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-7">
									Our Core Values
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-8">
									<span>
									We are a customer-centric group of producers. We believe in integrity, quality, and genuineness in all business areas.
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<div class="choose ">
				<div class="container">
					<div class="row" data-aos="zoom-in-up">
						<div class="col-md-8">
							<div class="titlepage">
								<h2>Why Choose Us? </h2>
								<p style={{ fontSize: "25px" }}>
									Since We Deliver More Than Organic Produce
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="container-fluid " data-aos="zoom-in-up">
					<div class="row d_flex">
						<div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
							<div class="padding_with">
								<div class="row">
									<div class="col-md-6 padding_bottom">
										<div class="choose_box">
											<i>
												<Image src={icon1} alt="#" />
											</i>
											<div class="choose_text">
												<h3>Excellent Service</h3>
												<p>
												Place your order now and we will deliver it you sooner than you think.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-6 padding_bottom">
										<div class="choose_box">
											<i>
												<Image src={icon2} alt="#" />
											</i>
											<div class="choose_text">
												<h3>EAT MORE HEALTHILY</h3>
												<p>
												Health is wealth, so why eat GMO food when you can get Fresh Organic food from your local grower? Place an order and let us send you some health.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-6 padding_bottom2">
										<div class="choose_box">
											<i>
												<Image src={icon3} alt="#" />
											</i>
											<div class="choose_text">
												<h3>Quality And Reliability</h3>
												<p>
												Quality and Reliability are the core pillars of our vision. And thats why we offer a money-back guarantee; if you think the quality is different from your expectations, give us a call, and we will come to get it with a full reimbursement.
												</p>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="choose_box">
											<i>
												<Image src={icon4} alt="#" />
											</i>
											<div class="choose_text">
												<h3>Expert Growers</h3>
												<p>
												 We are backed by a chain of expert farmers who are well-qualified and have decades of experience in the field. Making sure the delivery of top-notch, premium quality produce.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
							<div class="choose_img">
								<figure>
									<Image src={food} alt="#" />
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-5"></div>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	);
}

export default About