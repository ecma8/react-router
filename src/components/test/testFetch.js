import React, { Component } from 'react';
import Nav from '../public/nav';
import Loading from '../public/loading'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
        };
    }
    static contextTypes = {
        store: React.PropTypes.object
    };
    // get=(url,params,callback)=>{
    //     if (params) {
    //         let paramsArray = [];
    //         Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    //         if (url.search(/\?/) === -1) {
    //             url += '?' + paramsArray.join('&')
    //         } else {
    //             url += '&' + paramsArray.join('&')
    //         }
    //     }
    //     fetch(url,{
    //         method: 'GET',
    //     }).then(response => response.json()).then((response) => {
    //         callback(response);
    //     })
    // };
    // post=(url,params,callback)=>{
    //     fetch(url,{
    //         method: 'POST',
    //         body:params
    //     }).then((response) => response.json())
    //     .then((responseJSON) => {
    //         callback(responseJSON)
    //     })
    // };
    componentDidMount() {
        // let json={
        //     x:1,
        //     y:2
        // };
        // this.post('http://open.ecma8.com/index.php?c=Index&a=phone',this.formStringify(json),function(data){
        //     console.log(data)
        // })
    }
    formStringify=(json)=>{
        let form=new FormData();
        for(let i in json){
            form.append(i,json[i])
        }
        return form
    };
    componentWillUnmount(){

    };
    render() {
        const {isLoading} = this.context.store.getState('isLoading');
        console.log(isLoading);
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