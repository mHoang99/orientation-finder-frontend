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
        title: 'Entry Grade',
        dataIndex: 'grade',
        key: 'grade',
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





class FeeAndScore extends React.Component {

    render() {
        let data = [];
        this.props.list.forEach(
            (value, index) => {
                data.push({
                    key: index + 1,
                    name: value.name,
                    grade: value.grade,
                    fee: value.tuitionFeePerYear,
                })
            }           
        )

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