import React, { Component } from 'react';
import SimpleForm from './components/NewChatbot/SimpleForm';


class ChatApp extends Component {
    render() {
        return (
            <div>

                <SimpleForm />

            </div>
        );
    }
}


export default ChatApp;









// import React from 'react';
// import { Chatbot } from 'react-chatbot-kit';

// import MessageParser from './chatbot/MessageParser';
// import ActionProvider from './chatbot/ActionProvider';
// import config from './chatbot/config';

// import './ChatApp.css';

// function ChatApp() {
//     return (
//         <div classname="ChatApp">
//             <header className="ChatApp-header">
//                  <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
//             </header>
//         </div>
//     );
// }

// export default ChatApp;