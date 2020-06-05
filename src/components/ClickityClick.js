import React, { Component } from 'react'

export class ClickityClick extends Component {
    state = {
        clicked: false 
    }

    clickButton = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.clickButton}>Click</button>
            </div>
        )
    }
}

export default ClickityClick

