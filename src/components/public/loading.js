import React, { Component } from 'react'
import '../../static/css/loading.css'

class Loading extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
        isLoading:false
    };
    render(){
        let status='none';
        if(this.props.isLoading){
            status='block'
        }else{
            status='none'
        }
        return (
            <div className="loading" id="loading" style={{'display':status}}>
                <div className="loader-inner ball-scale-multiple">
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        )
    }
}
export default Loading