import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1 className='text-white bg-yellow-600 p-2 rounded-md text-xs m-5'>Something went wrong: {this.state.error.message}</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
