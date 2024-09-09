'use client'

import { Table, TableColumnsType, TableProps } from 'antd';
import styles from './Table.module.scss';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Table.css'

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType { };

interface Props {
    isUserInfo?: boolean;
    columns: TableColumnsType;
    dataSource: DataType[];
};

const AntTable = (props: Props) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection: TableRowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const columns: TableColumnsType = props.columns?.map((item) => (
        item
    ));
    columns.push(
        { title: '', dataIndex: 'edit', width: 24, },
        {
            title: props.isUserInfo ?
                <Image src={'/icons/blockIcon.svg'} alt='trash' width={24} height={24} /> :
                <Image src={'/icons/trash.svg'} alt='trash' width={24} height={24} />, dataIndex: 'action', width: 24
        },
    )

    return <div className={styles.container}>
        <Table className={styles.table} rowSelection={rowSelection} columns={columns} dataSource={props.dataSource} pagination={{
            position: ['bottomLeft']
        }} />
    </div>
}

export default AntTable;