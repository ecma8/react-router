import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../../redux/redux"
import { connect } from 'react-redux'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextTypes = {
        store: PropTypes.object,
    };
    componentDidMount() {

    }

    componentWillUnmount() {

    };
    add=()=>{
        this.context.store.dispatch({type:'add'});
    };
    del=()=>{
        this.context.store.dispatch({type:'del'});
    };
    render() {
        let {count} = this.context.store.getState();
        return (
            <div>
                <button onClick={this.add}>添加</button>
                <button onClick={this.del}>减少</button>
                <p>最终的值{count}</p>
            </div>
        )
    }
}
export default connect(
    mapStateToProps
)(Index);