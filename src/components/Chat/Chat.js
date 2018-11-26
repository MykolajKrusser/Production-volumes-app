import React, {Component} from 'react';
import img from '../../assets/img/avatar.jpeg';
import Avatar from '../UI/Avatar/Avatar';
import classes from './Chat.css';



class Chat extends Component {
    state = {
        chatUserGroup: [
            {
                id: 1,
                userName: 'Michelle Stewart',
                date: '2018-04-13T12:59-0500',
                correspond: [
                    {id: 1, message: 'More Random text again youMessage 1', init: 'youMessage', date: '2018-04-13T12:59-0500'},
                    {id: 2, message: 'More Random text again youMessage 2', init: 'yourMessage', date: '2018-04-12T12:59-0500'},
                    {id: 3, message: 'More Random text again youMessage 3', init: 'youMessage', date: '2018-04-11T12:59-0500'},
                    {id: 4, message: 'More Random text again yourMessage 1',init: 'yourMessage', date: '2018-04-10T12:59-0500'},
                    {id: 5, message: 'More Random text again yourMessage 2',init: 'youMessage', date: '2018-04-09T12:59-0500'},
                    {id: 6, message: 'More Random text again yourMessage 3',init: 'yourMessage', date: '2018-04-08T12:59-0500'}
                ],
            },
            {
                id: 2,
                userName: 'Jane Dow',
                date: '2018-04-13T12:59-0500',
                correspond: [
                    {id: 1, message: 'More Random text again youMessage 1', init: 'yourMessage', date: '2018-04-13T12:59-0500'},
                    {id: 2, message: 'More Random text again youMessage 2', init: 'youMessage', date: '2018-04-12T12:59-0500'},
                    {id: 3, message: 'More Random text again youMessage 3', init: 'youMessage', date: '2018-04-11T12:59-0500'},
                    {id: 4, message: 'More Random text again yourMessage 1',init: 'youMessage', date: '2018-04-10T12:59-0500'},
                    {id: 5, message: 'More Random text again yourMessage 2',init: 'youMessage', date: '2018-04-09T12:59-0500'}
                ],
            }
        ],
        correspond: [],
        TextMessage: ''
    };

    ChatUserChangeGroup = (index) => {
        const selected = {...this.state.chatUserGroup};
        this.setState({
            correspond: selected[index].correspond
        });
    }

    handleChangeTextMessage = (e) => {
        this.setState({TextMessage: e.target.value});
    }

    render() {

        console.log(this.state.correspond);
        const incomes = this.state.chatUserGroup.map((income, index)=>{
            return <li key={index} id={income.id} onClick={()=>this.ChatUserChangeGroup(index)}>
                            <Avatar src={img}/>
                            <div>{income.userName}</div>
                            <div>{income.date}</div>
                        </li>
        });

        const chats = this.state.chatUserGroup.map((chat, index)=>{
            return <li key={index} >
                
            </li>
        });

        return(
            <section className={classes.Chat}>
                <div className={classes.IncomeList}>
                    <ul>
                        {incomes}
                    </ul>
                </div>
                <div className={classes.ChatRoom}>
                    <ul>
                        {chats}
                    </ul>
                </div>
            </section>
        );
    };
};


export default Chat;