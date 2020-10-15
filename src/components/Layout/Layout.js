import React from 'react';
import cssClasses from './Layout.module.css'

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className={cssClasses.Content}>
                    {this.props.children}
                </main>
            </React.Fragment >
        )
    }
}

export default Layout;