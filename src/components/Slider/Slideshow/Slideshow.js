import React, { Component } from 'react';
import Arrows from '../Arrows/Arrows.js';
import './Slideshow.css';

class Slideshow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			slideInterval: 4000,
			showIndex: false,
			showArrows: true,
			effect: 'fade',
			autoplay: true,
			enableKeyboard: false,
			slides: props.slides
		};
	}

	componentDidMount(e) {
			this.runSlideShow();
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}


	runSlideShow = () => {
		let intervalId = setInterval(this.autoSlideshow, this.state.slideInterval);
		this.setState({
			intervalId
		});
	}

	autoSlideshow = () => {
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
		});
	}

	restartSlideshow = () => {
		clearInterval(this.state.intervalId);
		this.runSlideShow();
	}

	increaseCount = () => {

		this.setState({
			effect: 'fade'
		});
		this.restartSlideshow();
		this.setState({
			currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
		});
	}

	decreaseCount = () => {

    this.setState({
			effect: 'fade'
		});

		this.restartSlideshow();

		let currentSlide;
		currentSlide = this.state.currentSlide === 0 ? this.state.slides.length - 1 : currentSlide = this.state.currentSlide - 1;
		this.setState({
			currentSlide
		});
	}


	render() {

		const { slides, showIndex, effect, showArrows } = this.state;

		let slideEffect = 'fade';
		let slideShowSlides;

		if(!this.props.children){
			slideShowSlides = slides.map((slide, i) => {
				return <li className = {`slide ${effect} ${(this.state.currentSlide === i ? "showing-"  + slideEffect  : "")}`} key={i} style={{backgroundImage: `url(${slide})`}}></li>
			});
		} else {
			slideShowSlides = slides.map((slide, i) => {
				return <li className = {`slide ${effect} ${(this.state.currentSlide === i ? "showing-"  + slideEffect  : "")}`} key={i}>{slide}</li>
			});
		}

		return (

			<div className="demo">

				<div style={{position:'absolute', height: this.props.height || '100vh', width: this.props.width || '100vw'}}>
					<div className="slideshow-container">
						<ul className="slides">
							{slideShowSlides}
						</ul>

						{showArrows &&  (
							<Arrows decreaseCount={this.decreaseCount} increaseCount={this.increaseCount}/>
						)}

						{showIndex && (
							<div className="show-index">
								<p>{`${this.state.currentSlide + 1} / ${slides.length}`}</p>
							</div>
						)}
					</div>
				</div>

			</div>
		);
	}
}

export default Slideshow;
