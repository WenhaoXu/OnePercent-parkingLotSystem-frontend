import React, {Component} from "react";
import { List,NavBar,Icon } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


class history extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const showHistoryListfromMap = this.props.showHistoryListfromMap;
        let token = localStorage.getItem("token");
        let parse = JSON.parse(token);
        fetch(`http://localhost:1234/orders/finished`, {
            method: 'GET',
            headers: {
                "Authorization":parse.token,
            },
        })
            .then(response => response.json())
            .then(json => {
                const historyList = json;
                // console.log(historyList);
                showHistoryListfromMap(historyList);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            });
    }
    render() {
        return (
            <div>
                <NavBar mode="dark"
                >历史订单查询</NavBar>
                <List className="my-list">
                    {this.props.historyList.map((i,index) => (
                        <Item key={index} arrow="horizontal" multipleLine onClick={() => {}}>
                        {i.carNo}<Brief>{i.createDate}</Brief>
                        </Item>
                    ))}

                </List>

            </div>
        );
    }
}

export default history;