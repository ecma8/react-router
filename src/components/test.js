import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './public/loading'
import {mapStateToProps,mapDispatchToProps} from'../redux/redux'
class Counter extends Component {
    render() {
        const { value,isLoading, addClick ,delClick,showLoadingClick,hideLoadingClick} = this.props;
        console.log(this.store);
        let loadingMask;
        if(isLoading)
        {
            loadingMask=<Loading/>
        }
        else{
            loadingMask=''
        }
        return (
            <div>
                <span>{value}</span>
                {loadingMask}
                <button onClick={addClick}>add</button>
                <button onClick={delClick}>del</button>
                <button onClick={showLoadingClick}>show</button>
                <button onClick={hideLoadingClick}>hide</button>
            </div>
        )
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

class test extends Component {
    render() {
        return(
            123
        )
    }
}
export default test