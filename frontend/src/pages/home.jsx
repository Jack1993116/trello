import React from 'react';
import { connect } from 'react-redux';

import Part1 from './home.part/home.part1'
import Part2 from './home.part/home.part2'
import Part3 from './home.part/home.part3'
import Part4 from './home.part/home.part4'
import Part5 from './home.part/home.part5'
import Part6 from './home.part/home.part6'
import Part7 from './home.part/home.part7'
import Part8 from './home.part/home.part8'

const Home = ({langs}) => {
	return (
		<div className="textAlignCenter">
			<Part1 pt={langs.pt1} />
			<Part2 pt={langs.pt2} />
			<Part3 pt={langs.pt3} />
			<Part4 pt={langs.pt4} />
			<Part5 pt={langs.pt5} />
			<Part6 pt={langs.pt6} />
			<Part7 pt={langs.pt7} />
			<Part8 pt={langs.pt8} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		langs: state.lang.language
	}
}

export default connect(mapStateToProps)(Home);