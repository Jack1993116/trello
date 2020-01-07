import React from 'react';
import { MDBContainer } from 'mdbreact';

import '../../App.css';

const Part7 = ({pt}) => {
	return (
		<div>
			<MDBContainer>
				<div align="center" style={{color: "white", padding: "48px 24px 48px 24px", borderRadius: "10px", background: "linear-gradient(180deg, #42548e 0%, #6b668c 100%)"}}>
					<h2 style={{marginTop: "10px"}}>{pt.h2}</h2>
					<p>{pt.p1}</p>
					<div>
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/83b3c2b3542d1ce997306dd2c76a898d/logo-kickstarter.svg" width="207" height="24" alt="Kickstarter" />
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/99b35981e7c571708532ba39f0764aeb/logo-national-geographic.svg" width="166" height="46" alt="National Geographic" />
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/4838c7256b43105d3abe0631ac1bb72c/logo-google.svg" width="143" height="46" alt="Google" />
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/759e9aaacc706fd1f2d5f81b1a76b768/logo-fender.svg" width="153" height="55" alt="Fender" />
					</div>
					<p><a href="/signup" className="btn px-3 btnP5" style={{backgroundColor: "#ebecf0", color: "black", borderRadius: "5px", fontSize: "12pt", marginTop: "50px"}}>{pt.p2}</a></p>
				</div>
			</MDBContainer>
		</div>
	)
}

export default Part7;