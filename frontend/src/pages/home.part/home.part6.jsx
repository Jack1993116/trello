import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import '../../App.css';

const Part6 = ({pt}) => {
	return (
		<div>
			<MDBContainer>
				<MDBRow center style={{alignItems: "center", padding: "50px 0px 50px 0px"}}>
					<MDBCol md="6">
						<h3 align="center" style={{fontSize: "2.1875rem"}}> {pt.h3} </h3>
						<p align="justify" style={{fontSize: "1.25rem", textAlignLast: "center"}}> {pt.p} </p>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol md="4" sm="12" >
						<img className="imgP5" align="center" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0cad30a99820b0d840a5b48635d00b6e/updated-layouts-collab.png" width="100%" alt="" />
						<h5 align="center">{pt.c1.h3}</h5>
						<p align="center">{pt.c1.p1}</p>
						<p align="center"><a href="/signup" className="btn px-3 btnP2" style={{backgroundColor: "#6d8ea2", color: "white", borderRadius: "5px", fontSize: "12pt", marginTop: "32px"}}>{pt.c1.p2}</a></p>
					</MDBCol>
					<MDBCol md="4" sm="12" >
						<img className="imgP5" align="center" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/15e77c8347135120a438d17e38195e44/updated-layouts-platform.png" width="100%" alt="" />
						<h5 align="center">{pt.c2.h3}</h5>
						<p align="center">{pt.c2.p1}</p>
						<p align="center"><a href="/signup" className="btn px-3 btnP2" style={{backgroundColor: "#6d8ea2", color: "white", borderRadius: "5px", fontSize: "12pt"}}>{pt.c2.p2}</a></p>
					</MDBCol>
					<MDBCol md="4" sm="12" >
						<img className="imgP5" align="center" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6eaaf5e37ab67a8ed6cd7764660513b9/updated-layouts-sync.png" width="100%" alt="" />
						<h5 align="center">{pt.c3.h3}</h5>
						<p align="center">{pt.c3.p1}</p>
						<p align="center" display={{display: "flex", flexWrap: "wrap", height: "44px"}}>
							<a href="/signup"><img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/eebf313cb223112b503b7322173b013c/btn-appstore-black.png" className="img-fluid imgP6" alt="Available on the App Store" width="45%" /></a>
							<a href="/signup"><img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bcde9868a665af4ab4efe460c46fbc7b/btn-playstore-black.png" className="img-fluid imgP6" alt="Android App on Google Play" width="45%"/></a>
						</p>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Part6;