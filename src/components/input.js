import React, { Component } from 'react'
class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            xxx:{
                aaa:false,
                bbb:false,
                ccc:false,
                ddd:false,
            }
        }
    }
    change = (e) =>{
        let type=e.target.value;
        let status=e.target.checked;
        let newState=this.state.xxx;

        newState[type] = status;
        this.setState({
            xxx:newState
        });
        console.log(this.state.xxx)
    };
    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.change} value="aaa"/>
                <input type="checkbox" onChange={this.change} value="bbb"/>
                <input type="checkbox" onChange={this.change} value="ccc"/>
                <input type="checkbox" onChange={this.change} value="ddd"/>
            </div>
        )
    }
}
export default Input