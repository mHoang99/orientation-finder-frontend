import React from 'react';
import { Table, Tag, Space, Card } from 'antd';
import cssClasses from './SalaryTable.module.css'


const columns = [
    {
        title: 'No.',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Speciality',
        dataIndex: 'spec',
        key: 'spec',
    },
    {
        title: 'Average Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a, b) => a.salary - b.salary,
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

class SalaryTable extends React.Component {

    state = {
        data: this.props.salaryTable
    }

    render() {
        return (
            <React.Fragment>
                <Card className={cssClasses.container}>
                    <Table columns={columns} dataSource={data} />
                </Card>,

            </React.Fragment >
        )
    }
}

export default SalaryTable