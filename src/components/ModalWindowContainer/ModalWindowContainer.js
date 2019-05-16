import React from 'react';
import {connect} from 'react-redux';
import ModalWindow from '../Modal/ModalWindow';

const ModalWindowContainer = (props) => {
	return (
		<ModalWindow  {...props} />
	)
};

const mapStateToProps = state => {
	return {
		students: state.students[0]
	}
}

export default connect(mapStateToProps, null)(ModalWindowContainer);