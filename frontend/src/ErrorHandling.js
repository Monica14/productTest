import React, { Component } from 'react';


class ErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: 'Something Went Wrong'
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.state.error}</div>
        }
        return this.props.children;
    }
}

export default ErrorHandling;