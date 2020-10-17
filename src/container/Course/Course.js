import React from 'react';

class Course extends React.Component {
    state = {
        cid: this.props.match.params.cid
    }

    render() {
        
        console.log(this.state.cid);
        return (
            <React.Fragment>
               Course
            </React.Fragment>
        )
    }
}

export default Course