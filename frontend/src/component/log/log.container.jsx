import React from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

import list from '../../pages/home.part/language-list';
import GoolgeBtn from '../utils/google.button';
import Footer from '../footer/footer';
import CustomInput from '../utils/input.custom';
import LoggerBtn from '../utils/logger.button';

import Background from '../utils/background';

const Log = ({children, ...props}) => {
	return (
		<div>
			<Background />
			<MDBContainer fluid style={{backgroundColor: "transparent", height: "100%"}}>
				<img align="center" alt="Trello" className="trello-main-logo" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
				<MDBRow center style={{margin: "0 auto"}}>
					<MDBCol style={{maxWidth: "400px"}}>
						{children}
					</MDBCol>
				</MDBRow>
				<Footer list={list} />
			</MDBContainer>
		</div>
	)
}

export default Log;