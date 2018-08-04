import React, { Component } from 'react';
import  {Table} from 'antd';
const { Column} = Table;
export default  class ParkingBoyTable extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onComponentDidMount()
    }

    render(){
        const data = this.props.parkingBoyList;
        return(
            <div>
                <Table  dataSource={data} rowKey="id">
                    <Column
                        title="id"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        title="名字"
                        dataIndex="name"
                        key="name"
                    />
                </Table>
            </div>
        );
    }
}