import React from 'react';

class Speciality extends React.Component {
    state = {
        sid: this.props.match.params.sid
    }

    render() {
        console.log(this.state.sid)

        return (
            <React.Fragment>
                {/* <SalaryInfo/>
                <SalaryInfo/> */}
            </React.Fragment>
        )
    }
}

export default Speciality