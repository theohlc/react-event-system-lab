import { Component } from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {
    render(){
        return(
            <button
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />
        )
    }

    handleFocus = () => {
        console.log('Good!')
    }
    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
}