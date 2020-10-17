import React from 'react';

class ABC extends React.Component {
    componentDidMount() {
        window.location.href="http://10.1.10.90:8080/warmup/1"
    }

    render() {
        return (
            <div></div>
        )
    }
}   

export default ABC