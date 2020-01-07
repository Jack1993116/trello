import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

const Part3 = ({pt}) => {
	return (
		<div>
			<MDBContainer>
				<MDBRow style={{alignItems: "center", padding: "50px 0px 50px 0px"}}>
					<MDBCol md="5">
						<img src="part3.png" className="img-fluid" alt="" />
					</MDBCol>
					<MDBCol md="7">
						<h3 style={{fontSize: "2.1875rem"}}>{pt.h3}</h3>
						<p style={{fontSize: "1.25rem"}}>{pt.p}</p>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Part3;