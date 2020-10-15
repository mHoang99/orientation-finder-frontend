import { Button } from 'antd';
import React from 'react';
import cssClasses from './SubmitButton.module.css'

const SubmitButton = (props) => {
    return (
        <Button
            className={cssClasses.SubmitButton}
            type="primary"
            shape='round'
            htmlType="submit"
            size='large'
            block
            loading={props.loading}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default SubmitButton;