import React, { Component } from 'react';
import Nav from './public/nav';
import Loading from './public/loading'
import {mapStateToProps,mapDispatchToProps} from'../redux/redux'
import { connect } from 'react-redux'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    render() {
        const {isLoading} = this.props;
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
                {loadingMask}
                <Nav/>
                <div>
                    {this.props.children || <span>No Content</span>}
                </div>
            </div>
        );
    }
}
Home.contextTypes = {
    store: React.PropTypes.object
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);