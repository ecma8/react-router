import React, { Component } from 'react'
import { createStore } from 'redux'

const showLoadingAction = { type: 'showLoading' };
const hideLoadingAction = { type: 'hideLoading' };

//mapGetters
function mapStateToProps(state) {
    return {
        value: state.count,
        isLoading:state.isLoading
    }
}
//mapActions
function mapDispatchToProps(dispatch) {
    return {
        showLoadingClick: () => dispatch(showLoadingAction),
        hideLoadingClick: () => dispatch(hideLoadingAction),
    }
}
export {mapStateToProps,mapDispatchToProps}