import React from 'react';
import cssClasses from './Container.module.css'

const Container = (props) => {
    return(
        <div className={cssClasses.Container}>
            {props.children}
        </div>
    )
}

export default Container;