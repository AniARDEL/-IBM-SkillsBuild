import React from "react";
import { motion } from "framer-motion";
import coverImage from "../../assets/cover-image.jpg";
import review2 from "../../assets/review2.jpg";
import review1 from "../../assets/review1.jpg";
import review3 from "../../assets/review3.jpg";

const Testimonials = () => {
    const sectionStyle = {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
      };
    
    return (
<section  className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" style={sectionStyle} >
<h3>Reviews</h3>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
	
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   

	<div className="carousel-inner">		
		<div className="carousel-item active">
			<div className="img-box"><img src={review2} alt=""/></div>
			<p className="testimonial">The Burger Shop truly lives up to its name. I tried their signature Royal Burger and was blown away by the explosion of flavors in every bite. The patty was juicy and cooked to perfection, topped with a tantalizing blend of sauces and fresh veggies. This place is a must-visit for burger enthusiasts!</p>
			<p className="overview">Michael Holz</p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={review1} alt=""/></div>
			<p className="testimonial">ve visited The Burger Shop multiple times, and each visit is a treat for my taste buds. The quality and taste of their burgers remain consistently outstanding. The Classic Cheeseburger is a timeless favorite, made with top-notch ingredients. It's clear that The Burger Shop takes pride in delivering excellence with every burger.</p>
			<p className="overview">Paula Wilson</p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div className="carousel-item">
			<div className="img-box"><img src={review3} alt=""/></div>
			<p className="testimonial">Being a vegetarian, I'm often limited in my burger choices. However, The Burger Shop has a fantastic selection for plant-based eaters. The Veggie Supreme Burger was a revelation – hearty, satisfying, and bursting with wholesome flavors. It's rare to find a place like The Burger Shop that caters to all tastes so exceptionally.</p>
			<p className="overview">Antonio Moreno</p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>

	<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i className="fa fa-angle-left"></i>
	</a>
	<a className="carousel-control-next" href="#myCarousel" data-slide="next">
		<i className="fa fa-angle-right"></i>
	</a>
</div>
</section>
    );
};

export default Testimonials;