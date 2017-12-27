import React, { Component } from 'react';
import http from '../../http'
import qs from 'qs'
import Loading from '../public/loading'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            method:0
        };
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    GET=()=>{
        let params={
            x:this.refs.x.value,
            y:this.refs.x.value
        };
        http.get('/index.php?c=index&a=phone',{params:params})
        .then(data=>{
            this.setState({
                method:data.data
            })
        });
    };
    POST=()=>{
        let params={
            x:this.refs.x.value,
            y:this.refs.x.value
        };

        http.post('/index.php?c=index&a=phone',qs.stringify(params))
        .then(data=>{
            this.setState({
                method:data.data
            })
        });
    };
    render() {
        return (
            <div>
                <Loading style={{'display':'none'}}/>
                <p>
                    <input type="text" ref="x" placeholder="请输入x的值"/>
                    <input type="text" ref="y" placeholder="请输入y的值"/>
                    <input type="button" onClick={this.GET} value='GET提交'/>
                    <input type="button" onClick={this.POST} value='POST提交'/>
                </p>
                <p>返回值：{this.state.method}</p>
            </div>
        );
    }
}

export default Home;