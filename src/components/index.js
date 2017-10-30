import React, { Component } from 'react';
import menuList from '../static/json/menu.json';
import { Link } from 'react-router';
import { connect } from 'react-redux'
class Index extends Component{
    constructor(props) {
        super(props);
        this.state={
            json:menuList.menuList[0].list
        }
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    show=()=>{
        this.context.store.dispatch({type: 'showLoading'})
    };
    hide=()=>{
        this.context.store.dispatch({type: 'hideLoading'})
    };
    render() {
        let item = this.state.json.map((item,index) => {
            return (
                <li key={index}>
                    <h5>
                        <span>{item.title}</span>
                    </h5>
                    <dl>
                        {
                            item.list.map((items,index) => {
                                return (
                                    <dd key={index}>
                                        <Link to={'/index/'+items.path} activeClassName="slide-bar-color">{items.name}</Link>
                                    </dd>
                                )
                            })
                        }
                    </dl>
                </li>
            );
        });
        const {showLoadingClick,hideLoadingClick} = this.props;
        console.log(this);
        return (
            <div className='content'>
                <ul className='content-left-nav'>
                    {item}
                </ul>
                <div className="content-right">
                    <button onClick={this.show}>show</button>
                    <button onClick={this.hide}>hide</button>
                    {this.props.children || <span>No Content</span>}
                </div>
            </div>
        );
    }
}
Index.contextTypes = {
    store: React.PropTypes.object
};
export default Index;