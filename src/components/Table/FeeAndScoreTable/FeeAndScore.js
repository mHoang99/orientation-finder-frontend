import React from 'react';
import { Table, Tag, Space, Card } from 'antd';
import cssClasses from './FeeAndScore.module.css'

const columns = [
    {
        title: 'No.',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'University',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Average Score',
        dataIndex: 'score',
        key: 'score',
        sorter: (a, b) => a.score - b.score,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Tution Fees',
        dataIndex: 'fee',
        key: 'fee',
        sorter: (a, b) => a.fee - b.fee,
        sortDirections: ['descend', 'ascend'],
    }
];


const data = [
    {
        key: '1',
        spec: 'John Brown',
        salary: 32,
    },
    {
        key: '2',
        spec: 'John A',
        salary: 35,
    },
    {
        key: '3',
        spec: 'John C',
        salary: 36,
    },
];



class FeeAndScore extends React.Component {
    state = {
        data: this.props.FeeAndScoreTable
    }

    render() {
        return (
            <React.Fragment>
                <Card className={cssClasses.container}>
                    <Table columns={columns} dataSource={data} />
                </Card>,
            </React.Fragment>
        )
    }
}

export default FeeAndScore