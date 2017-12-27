import React, { Component } from 'react';
import Nav from './public/nav';
import PropTypes from 'prop-types';
import Loading from './public/loading'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }
    static contextTypes = {
        store: PropTypes.object
    };
    componentDidMount() {
    }
    componentWillUnmount(){

    };
    render() {
        const {isLoading} = this.context.store.getState('isLoading');
        return (
            <div>
                <Loading isLoading={isLoading}/>
                <Nav/>
                <div>
                    {this.props.children || <span>No Content</span>}
                </div>
            </div>
        );
    }
}

export default Home;