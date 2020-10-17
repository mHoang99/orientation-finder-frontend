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
        title: 'Organization',
        dataIndex: 'org',
        key: 'org',
    },
    {
        title: 'Position',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => {
            console.log(tags);
            return (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )
        },
    }
];


class SalaryTable extends React.Component {

    // state = {
    //     data: this.props.list
    // }


    render() {
        const data = [];
        this.props.list.forEach((value, index) => {
            if (value.position) {
                data.push({
                    key: index + 1,
                    org: value.name,
                    tags: value.position.split(', ')
                })
            }

        });



        console.log(data)
        console.log(this.props)
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