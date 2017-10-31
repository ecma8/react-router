import React, { Component } from 'react';
class more extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    render() {
        return (
            <div>
                这是一对多
                {this.props.location.query.message || 'query'}
            </div>
        );
    }
}
export default more;