import React from 'react';
import { Link } from 'react-router-dom';

const Hint = ({ hints }) => {
    return (
        <Link to="#">
			<div style={{backgroundColor: `rgb(240, 173, 131)`, height: "170px"}} >
				<img alt="hint" className="hint_img" src={hints.src} />
			</div>
			<h3 class="hint_txt">{hints.hint}</h3>
		</Link>
    )
}

const MenuHint = ({ setUtil }) => {
    const hints = [{
        src: "https://a.trellocdn.com/prgb/dist/images/tips/info-image-04@1x.4c0a774936d0d1148251.png",
        hint: "New To Trello? Check Out The Guide"
    }, {
        src: "https://a.trellocdn.com/prgb/dist/images/tips/info-image-03@1x.68fe6ac4cd198b845184.png",
        hint: "Make Boards More Powerful With Trello Power-Ups"
    }, {
        src: "https://a.trellocdn.com/prgb/dist/images/tips/info-image-01@1x.6c9f249b907bfe50e2b3.png",
        hint: "Get Inspired By Dozens Of Different Trello Workflows"
    }, {
        src: "https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png",
        hint: "It’s Easy To Get Your Team Up And Running With Trello Playbooks"
    }];
    const [hintstep, setHintstep] = React.useState(0);
    const slideStep = () => {
        hintstep >= 3 ? setHintstep(hintstep - 3) : setHintstep(hintstep + 1);
        console.log(hintstep);
    }

    return (
        <div style={{position: "absolute", right: "25px", zIndex: 5}} >
			<div className="addmenu_header" >
				<p>Information</p>
				<button onClick={() => {setUtil(0)}}><span className="fa fa-times" /></button>
			</div>
			<div className="addmenu_content">
				<div >
					<Hint hints={hints[hintstep]} />
					<button className="next_hint" onClick={() => {slideStep()}} >Get A New Tip</button>
				</div>
				<ul>
					<li style={{display: "inline-block"}} ><a href="/pricing" className="hint-a" >Pricing</a></li>
					<li style={{display: "inline-block"}} ><a href="/apps" className="hint-a" >Apps</a></li>
					<li style={{display: "inline-block"}} ><a href="/blog" className="hint-a" >Blog</a></li>
					<li style={{display: "inline-block"}} ><a href="/privacy" className="hint-a" >Privacy</a></li>
					<li style={{display: "inline-block"}} ><a href="/more" className="hint-a" >More</a></li>
				</ul>
			</div>
		</div>
    )
}

export default MenuHint;