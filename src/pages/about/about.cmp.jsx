import React from 'react';
import './about.scss';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

class AboutPage extends React.Component {
	constructor() {
		super();
		this.state = {
			revield: false
		};
	}

	handleWaypoint = () => {
		this.setState((prevState) => ({
			revield:true
		}));
	};

	render() {
		
		return (
			<div className="about flex-c">
				
				<div className={`letters ${this.state.revield ? 'show' : ''}`}>Photographer.</div>
				<div className="backround" />
        <div className={`about-text flex-c ${this.state.revield ? 'show' : ''}`}>
        <Waypoint onEnter={this.handleWaypoint} />
					<h1 className="title">About me</h1>
					<h2>Welcome,Friend!.</h2>
					<p>
					
Well hello!  Welcome to my new and exciting piece of internet!  I'm so glad you're here and hope you stay awhile to check things out.  My name is Brianna Rose. I'm Matt's wife, Arlo and Bodie's Momma and your photographer.  I'm born and raised in beautiful Haines, Alaska. I lived in Alaska for my first 25 years of life, spent 6 years in Minnesota and am now living in Boise, Idaho!
 I'll be the one taking your photos and capturing those milestones and moments that are special to you.  One of my favorite  things about photography is connecting with people and taking authentic and genuine photos.  During our session you can expect to have fun. I'll be laughing along side of you and capturing those moments in between.  My love for natural light and raw emotions help me capture those moments that show who you are today, in this moment in a beautiful way.
​
If you're ready for some updated photos, I'm ready to take them for you!.{' '}
					</p>
					<div className="about-social flex-c">
						<Link className="link-button" to="/contact">
							Contact me
						</Link>
						<a href="https://www.instagram.com/iliyan.tsachev/" target="blank">
							<FaInstagram className="react-icons" />
						</a>
						<a href="https://www.facebook.com/itsachevphotography/?modal=admin_todo_tour" target="blank">
							<FaFacebookSquare className="react-icons" />
						</a>
					</div>
				</div>
				<div className="about-image-area flex-c">
					<img
						src="https://res.cloudinary.com/dy8c4mtkl/image/upload/v1604024809/Screen_Shot_2020-10-29_at_9.25.32_PM_co8wiv.png"
						className={`about-img ${this.state.revield ? 'show' : ''}`}
						alt="iliyan-portrait"
					/>
				</div>
			</div>
		);
	}
}

export default AboutPage;
