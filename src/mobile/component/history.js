import React, {Component} from "react";
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


class history extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const showHistoryListfromMap = this.props.showHistoryListfromMap;

        fetch(`https://parkinglotappofsystem.herokuapp.com/orders/finished`, {
            method: 'GET',
            headers:
                {'Authorization':localStorage.getItem("token")}
        })
            .then(response => response.json())
            .then(json => {
                const historyList = json;
                console.log(historyList);
                showHistoryListfromMap(historyList);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            });
    }
    render() {
        return (
            <div>
                <List className="my-list">
                    {this.props.historyList.map(i => (
                        <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        {i.carNo}<Brief>{i.createDate}</Brief>
                        </Item>
                    ))}

                </List>

            </div>
        );
    }
}

export default history;