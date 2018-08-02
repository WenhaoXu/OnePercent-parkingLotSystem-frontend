import React, {Component} from "react";
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


class History extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const showHistoryListfromMap = this.props.showHistoryListfromMap;

        fetch(`http://localhost:1234/users`, {
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
                    {this.state.history.historyList.map(i => (
                        <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        {this.state.history.historyList.get(i).name}<Brief>subtitle</Brief>
                        </Item>
                    ))}

                </List>

            </div>
        );
    }
}

export default History;