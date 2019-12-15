import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increamentCount=()=>{
        this.setState(prevState=>{
            return {
                count:prevState+1
            }
        } )
    }
    render() {
        return (
            <div>
                  <button onClick={this.increamentCount}>count{this.state.count }</button>
            </div>
        )
    }
}
export default ClassCounterTwo