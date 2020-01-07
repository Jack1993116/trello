import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import '../../App.css';

const Part1 = ({pt}) => {
	return (
		<div  style={{backgroundColor: "#0099cc", padding: "100px 0", color: "white", margin: "auto"}}>
			<MDBContainer>
				<MDBRow style={{alignItems: "center"}}>
					<MDBCol lg="5" className="p1-1">
						<h1 className="p1-h1">{pt.h1}</h1>
						<p style={{fontSize: "1.5625rem", fontWeight: "300"}}>{pt.p}</p>
					</MDBCol>
					<MDBCol lg="6" className="offset-md-1 offset-lg-1 p1-2">
						<img style={{maxWidth: "100%"}} src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="" width="582" />
					</MDBCol>
					<form className="p1-3">
						<input type="email" placeholder="Email" className="btn-lg l-email" style={{borderRadius: "5px", margin: "10px", width: "376px", fontSize: "1.5625rem", outline: "none", border: "none"}} />
						<button type="button" className="success-color btn-lg btnP1" style={{outline: "none", width: "280px", border: "none", color: "white", fontSize: "1.5625rem"}} >{pt.btn} </button>
					</form>
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Part1;