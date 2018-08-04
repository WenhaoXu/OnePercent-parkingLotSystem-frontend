import React from 'react';
import  {Table} from 'antd';
const { Column} = Table;
export default  class OrderTable extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.onComponentDidMount()
    }

    render(){
        const data = this.props.orderList;
        return(
            <div>
                <Table  dataSource={data} rowKey="id">
                    <Column
                        title="id"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        title="车牌号"
                        dataIndex="carNo"
                        key="carNo"
                    />

                    <Column
                        title="类型"
                        dataIndex="type"
                        key="type"
                    />
                    <Column
                        title="状态"
                        dataIndex="status"
                        key="status"
                    />
                    <Column
                        title="操作"
                        key="action"
                    />

                </Table>
            </div>
        );
    }

}