import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Rappa Realty Group!`)],
  botName: "Rappa Realty Bot",
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  },
  customStyles: {
      botMessageBox: {
          backgroundColor: "navy",
      },

      chatButton: {
          backgroundColor: "navy",
      },
  }
}

export default config