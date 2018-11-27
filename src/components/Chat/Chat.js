import React, {Component} from 'react';
import img from '../../assets/img/avatar.jpeg';
import Avatar from '../UI/Avatar/Avatar';
import classes from './Chat.css';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';



class Chat extends Component {
    state = {
        chatUserGroup: [
            {
                id: 1,
                userName: 'Michelle Stewart',
                date: '2018-04-13T12:59-0500',
                correspond: [
                    {id: 1, message: 'More Random text again youMessage 1 More Random text again youMessage 1More Random text again youMessage 1', init: 'in', date: '2018-04-13T12:59-0500'},
                    {id: 2, message: 'More Random text again youMessage 2', init: 'in', date: '2018-04-12T12:59-0500'},
                    {id: 3, message: 'More Random text again youMessage 3', init: 'out', date: '2018-04-11T12:59-0500'},
                    {id: 4, message: 'More Random text again yourMessage 1',init: 'in', date: '2018-04-10T12:59-0500'},
                    {id: 5, message: 'More Random text again yourMessage 2',init: 'out', date: '2018-04-09T12:59-0500'},
                    {id: 6, message: 'More Random text again yourMessage 3',init: 'in', date: '2018-04-08T12:59-0500'}
                ],
            },
            {
                id: 2,
                userName: 'Jane Dow',
                date: '2018-04-13T12:59-0500',
                correspond: [
                    {id: 1, message: 'More Random text again youMessage 1', init: 'out', date: '2018-04-13T12:59-0500'},
                    {id: 2, message: 'More Random text again youMessage 2', init: 'in', date: '2018-04-12T12:59-0500'},
                    {id: 3, message: 'More Random text again youMessage 3', init: 'out', date: '2018-04-11T12:59-0500'},
                    {id: 4, message: 'More Random text again yourMessage 1',init: 'in', date: '2018-04-10T12:59-0500'},
                    {id: 5, message: 'More Random text again yourMessage 2',init: 'out', date: '2018-04-09T12:59-0500'}
                ],
            }
        ],
        correspond: [],
        textMessage: ''
    };

    ChatUserChangeGroup = (index) => {
        const selected = {...this.state.chatUserGroup};
        this.setState({
            correspond: selected[index].correspond
        });
    }

    handleChangeTextMessage = (e) => {
        this.setState({textMessage:  e.target.value});
    }

    onCloseChatroom = ()=>{
        const clear = []
        this.setState({
            correspond: clear
        });
    }

    sendMessageHandler = () => {
        let oldState = this.state;
        let updatedState = {...oldState};
        let newID = this.state.correspond.length+1;
        let message = this.state.textMessage;
        let newMessage = {
                id: newID,
                message: message,
                init: 'out',
                date: '2018-04-09T12:59-0500'
            };
        let newSend = updatedState.correspond.concat(newMessage);
        
        this.setState({correspond: newSend})
    }

    render() {
        console.log(this.state.correspond)
        const incomes = this.state.chatUserGroup.map((income, index)=>{
            return <li key={index} id={income.id} onClick={()=>this.ChatUserChangeGroup(index)}>
                <Avatar src={img}/>
                <div>{income.userName}</div>
                <div>{income.date}</div>
            </li>
        });

        const chats = this.state.correspond.map((chat)=>{
            let classType = '';
            if(chat.init === 'out'){
                classType = 'Left'
            }
            return <div key={chat.id} className={[classes.Right, classes[classType]].join(' ')}>
                {chat.init === 'in' ? <Avatar src={img}/> : null}
                <div className={classes.ChatMessage}>{chat.message}</div>
            </div>
        });

        const chatRoom = this.state.correspond.length === 0 
            ? null 
            :   <div className={classes.ChatRoom}>
                <Button onClick={this.onCloseChatroom}>Close Chatroom</Button>
                    {chats}
                <form className={classes.Inputs}>
                    <Input 
                        type='text' 
                        width={'80%'} 
                        background={'#1e70bf'}  
                        placeholder='Write a message'
                        onChange={this.handleChangeTextMessage}/>
                    <Button onClick={this.sendMessageHandler}>Send</Button>
                </form>
                </div>;

        return(
            <section className={classes.Chat}>
                <div className={classes.IncomeList}>
                    <ul>
                        {incomes}
                    </ul>
                </div>
                {chatRoom}
            </section>
        );
    };
};


export default Chat;