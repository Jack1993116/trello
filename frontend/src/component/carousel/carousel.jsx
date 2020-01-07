import React, { useState } from 'react';
import { MDBIcon } from 'mdbreact';

import './carousel.css';
const LCarousel = () => {
	const [index, setIndex] = useState(0);
	const nextC = () => {
		index >= 4?setIndex(0):setIndex(index + 1);
		// alert(index);
	}
	const beforeC = () => {
		index <= 0?setIndex(4):setIndex(index - 1);
		// alert(index);
	}
	const firstM = () => {
		setIndex(0);
	}
	const secondM = () => {
		setIndex(1);
	}
	const thirdM = () => {
		setIndex(2);
	}
	const forthM = () => {
		setIndex(3);
	}
	const fifthM = () => {
		setIndex(4);
	}
	return (
		<div className="carouselBoard">
			<a className="leftArrow" onClick={beforeC}>
				<svg height="40" viewBox="0 0 22 40" width="22"> <path d="m4.31783602 20 16.88192488 16.8819248c.7133028.7133029.7133028 1.8697953 0 2.5830981-.7133029.7133028-1.8697953.7133028-2.5830981 0l-18.08168628-18.0816863c-.38000317-.3800032-.5575644-.8857877-.53268368-1.3833366-.02488072-.4975489.15268051-1.0033334.53268368-1.3833366l18.08168628-18.08168628c.7133028-.71330283 1.8697952-.71330283 2.5830981 0 .7133028.71330283.7133028 1.86979522 0 2.58309804z" fill="#d9e4eb" transform="translate(.265262)"></path> 
				</svg>
			</a>
			<a className="rightArrow" onClick={nextC}>
				<svg height="40" viewBox="0 0 22 40" width="22"> 
					<path d="m4.31783662 20 16.88192488 16.8819248c.7133028.7133029.7133028 1.8697953 0 2.5830981-.7133029.7133028-1.8697953.7133028-2.5830981 0l-18.08168628-18.0816863c-.38000317-.3800032-.5575644-.8857877-.53268368-1.3833366-.02488072-.4975489.15268051-1.0033334.53268368-1.3833366l18.08168628-18.08168628c.7133028-.71330283 1.8697952-.71330283 2.5830981 0 .7133028.71330283.7133028 1.86979522 0 2.58309804z" fill="#d9e4eb" fillRule="evenodd" transform="matrix(-1 0 0 -1 21.734738 40)">
					</path> 
				</svg>
			</a>
			<div className="board">
				<div className="captions">
					<div className={index==0?"captionS":"caption"}> 
						Create a board for any project, give it a name, and invite your team.
					</div>
					<div className={index==1?"captionS":"caption"}> 
						Add lists to create steps in a workflow that is right for you. 
					</div>
					<div className={index==2?"captionS":"caption"}> 
						Create cards for tasks to complete or information you want to organize. 
					</div>
					<div className={index==3?"captionS":"caption"}> 
						Click on a card to add details, due dates, checklists, comments, and more. 
					</div>
					<div className={index==4?"captionS":"caption"}> 
						Move them across lists to show progress. Go from "To Do" to "Done" in no time! 
					</div>
					<nav className="carouselN"> 
						<a className={index==0?"step":""} onClick={firstM}></a> 
						<a className={index==1?"step":""} onClick={secondM}></a> 
						<a className={index==2?"step":""} onClick={thirdM}></a> 
						<a className={index==3?"step":""} onClick={forthM}></a> 
						<a className={index==4?"step":""} onClick={fifthM}></a> 
					</nav>
				</div>
			</div>
			<div className={"robot " + "robot-" + index} />
		</div>
	);
}

export default LCarousel;