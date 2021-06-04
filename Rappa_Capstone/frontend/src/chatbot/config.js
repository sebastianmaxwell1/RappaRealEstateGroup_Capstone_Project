import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

import Options from "../components/Options";

const config = {
  botName: "Rappa Realty Bot",
  initialMessages: [createChatBotMessage(`Welcome to Rappa Realty Group!`, {
      widget: "options"
  })],
  
  
  
  
  widgets: [
    {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      {
        //   widgetName: "agentQuiz",
        //   widgetFunc: (props) => <Quiz {...props} />,
        //   props: {
        //       questions: [
        //           question: "Whould you like to speak with Keith Rappa?",
        //           answer: 
        //       ]

        //   }
      }
      
  ],
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  },
  customStyles: {
      botMessageBox: {
          backgroundColor: "navy",
      },

      chatButton: {
          backgroundColor: "navy",
      }
  }
}

export default config