import React, { Component } from 'react'
import '../../static/css/loading.css'

class Loading extends Component{
    render(){
        return (
            <div className="loading">
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