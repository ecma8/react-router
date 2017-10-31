import React, { Component } from 'react';
import menuList from '../../static/json/menu.json';
import {IndexLink , Link} from 'react-router';
import logo from '../../static/img/logo.svg';
import head from '../../static/img/head.svg';
import money from '../../static/img/money.svg';
import message from '../../static/img/message.svg';
class Nav extends Component{
    constructor(props) {
        super(props);
        this.state={
            menuList:menuList.menuList
        }
    }
    componentDidMount() {


    }
    componentWillUnmount(){

    };
    render() {
        let item = this.state.menuList.map((item,index) => {
            return (
                <li key={item.routerName}>
                    <Link  to={'/'+item.routerName} activeClassName="active">
                        <img src={require('../../static/img/'+item.routerName+'.svg')}  alt=""/>
                        <p>{item.name}</p>
                    </Link>
                </li>
            );
        });
        return (
            <nav>
                <div className="console-logo">
                    <img src={logo} alt=""/>
                    <span>控制台</span>
                </div>
                <div className="row">
                    <ul className="console-nav col-lg-6">
                        {item}
                    </ul>
                    <ul className="console-person col-lg-4">
                        <li>
                            <img src={head} alt=""/>
                            <span>小云</span>
                            <div className="person-rotate">
                                &lt;
                            </div>
                        </li>
                        <li>
                            <img src={money} alt=""/>
                            <span>账户</span>
                        </li>
                        <li>
                            <img src={message} alt=""/>
                            <span>消息</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Nav;