import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';

const Part4 = ({pt}) => {
	return (
		<div>
			<MDBContainer>
				<MDBRow style={{alignItems: "center", padding: "50px 0px 50px 0px"}}>
					<MDBCol md="7">
						<h3 style={{fontSize: "2.1875rem"}}> {pt.h3} </h3>
						<p style={{fontSize: "1.25rem"}}> {pt.p} </p>
						<ul> 
							{pt.li.map(data=>{
								return <li key={data}>{data}</li>
							})}
						</ul>
					</MDBCol>
					<MDBCol md="5">
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/06f0833d33e1d71bbf0858029839b406/butler.png" className="img-fluid" alt="" />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Part4;