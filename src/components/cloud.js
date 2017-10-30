import React, { Component } from 'react';
import menuList from '../static/json/menu.json';
import {Link} from 'react-router';
class Cloud extends Component{
    constructor(props) {
        super(props);
        this.state={
            json:menuList.menuList[1].list
        }
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    render() {
        console.log(this.state.json);
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
                                        <Link to={'/cloud/'+items.path} activeClassName="slide-bar-color">{items.name}</Link>
                                    </dd>
                                )
                            })
                        }
                    </dl>
                </li>
            );
        });
        return (
            <div className='content'>
                <ul className='content-left-nav'>
                    {item}
                </ul>
                <div className="content-right">
                    {this.props.children || <span>No Content</span>}
                </div>
            </div>
        );
    }
}
export default Cloud;