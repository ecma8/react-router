import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextTypes = {
        router: PropTypes.object
    };
    componentDidMount() {

    }

    componentWillUnmount() {

    };
    show = () => {

    };
    hide = () => {

    };
    GoPath = () => {
        this.context.router.push('/live')
    };
    render() {
        return (
            <div>
                <Link to={{pathname: "/cloud/more", query: {message: "123"}}}>lining</Link>
            </div>
        );
    }
}
export default Index;