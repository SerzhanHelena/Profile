import React from 'react';
import {connect} from 'react-redux';
import ModalWindow from '../Modal/ModalWindow';
import {isOpen} from '../../actions/openModal';

const ModalWindowContainer = (props) => {
	return (
		<ModalWindow  {...props} />
	)
};

const mapStateToProps = state => {
	return {
		students: state.students[0],
		handlePopUp: state.handlePopUp
	}
}

const mapDispatchToProps = {
	isOpen
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer);