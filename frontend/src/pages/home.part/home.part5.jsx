import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

import LCarousel from '../../component/carousel/carousel';
const Part5 = ({pt}) => {
	return (
		<div>
			<MDBContainer>
				<MDBRow center style={{alignItems: "center", padding: "50px 0px 50px 0px"}}>
					<MDBCol md="6">
						<h3 align="center" style={{fontSize: "2.1875rem"}}> {pt.h3} </h3>
						<p align="center" style={{fontSize: "1.25rem"}}> {pt.p} </p>
					</MDBCol>
				</MDBRow>
				<LCarousel />
			</MDBContainer>
		</div>
	)
}

export default Part5;