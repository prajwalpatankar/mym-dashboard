import React, { useState, useEffect } from 'react';
import './Messages.css'
import { Card } from 'antd';

const Messages = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //some logic to get list of messages
    setMessages([
      {
        user: 'Christiano',
        message: 'Need Campign details by noon',
      },
      {
        user: 'Lionel',
        message: 'Last Campaign was great! Cheers!',
      },
      {
        user: 'Sasha',
        message: 'Need updates on next campiagn',
      }
    ])
    console.log(messages)
  }, [])


  return (
    <div className='messages'>
      <h2 className='messages-title'>Messages</h2>
      {messages.map((m, idx) => (
        <Card key={idx} className='message-card'>
          <h5>{m.user}</h5>
          <p>{m.message}</p>
        </Card>
      ))}
    </div>
  )
}

export default Messages;