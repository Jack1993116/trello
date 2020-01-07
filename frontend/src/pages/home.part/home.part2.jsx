import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import '../../App.css';

const Part2 = ({pt}) => {
	return (
		<div>
			<MDBContainer>
				<MDBRow style={{alignItems: "center", padding: "50px 0px 50px 0px"}}>
					<MDBCol md="5">
						<h3 style={{fontSize: "2.1875rem"}}>{pt.h3}</h3>
						<p style={{fontSize: "1.25rem"}}>{pt.p1}</p>
						<p><a href="/signup" className="btn px-3 btnP2" style={{backgroundColor: "#6d8ea2", color: "white", borderRadius: "5px", fontSize: "12pt"}}>{pt.p2}</a></p>
					</MDBCol>
					<MDBCol md="6" className="offset-lg-1">
						<img src="part2.png" className="img-fluid" alt="" />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Part2;