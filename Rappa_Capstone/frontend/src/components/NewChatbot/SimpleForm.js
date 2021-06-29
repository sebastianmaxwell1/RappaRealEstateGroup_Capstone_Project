import React, { Component } from 'react';
import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import Post from './Post';



//config options

const config ={
    width: "350px",
    height: "400px",
    floating: true,
    headerTitle: 'Rappa Realty Group ',
    hideBotAvatar: true,
  };

  //theme

  const theme = {
    background: 'lightgrey',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'navy',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'grey',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

class SimpleForm extends Component {
  render() {
      return (
          <ThemeProvider theme={theme}>
          <Chatbot
          steps={[
            {
                id:'intro', 
                message:'Welcome to Rappa Realty Group! Feel free to browse the provided listings! Would you like one of our agents to contact you?', 
                trigger:'intro-user',
              },
              {
                id:'intro-user', 
                options:[
                {value:'y', label:'Yes', trigger:'yes-response'},
                {value:'n', label:'No', trigger:'no-response'},
                ] 
              },
              {
                id:'yes-response', 
                message:'Great! Please answer the following short questions and an agent will be with you shortly.', 
                trigger:'q-name',
              },
              {
                id:'no-response', 
                message:'Sorry to hear that. If you need any help at all, checkout our Team Rappa tab at the top for our agents contact information. Have a great day!',
                end:true,
              },
            {
              id:'q-name', 
              message:'What is your name?', 
              trigger:'name',
            },
            {
              id:'name', 
              user:true,
              trigger:'q-phone'
            },
            {
              id:'q-phone', 
              message:'What is your phone number?', 
              trigger:'phone',
            },
            {
              id:'phone', 
              user:true,
              trigger:'q-email'
            },
            {
              id:'q-email', 
              message:'Halfway there! What is you email?', 
              trigger:'email',
            },
            {
              id:'email', 
              user:true,
              trigger:'q-subject'
            },
            {
              id:'q-subject', 
              message:'Are you looking to buy, sell, rent or just need some more information?', 
              trigger:'subject',
            },
            {
              id:'subject',
              user:true,
              trigger:'q-message',
            },
            
            {
              id:'q-message',
              message:'Finally! If you have anything else to add, please add that now. If not, just type "n/a" ',
              trigger:'message',
            },
            {
              id:'message',
              user:true,
              trigger:'q-submit',
            },
            {
                id:'q-submit',
                message:'Thank you! Would you now like to submit to Rappa Realty Group?',
                trigger:'submit',
            },
            {
              id:'submit', 
              options:[
              {value:'y', label:'Yes', trigger:'end-message'},
              {value:'n', label:'No', trigger:'no-submit'},
              ] 
            },
            {
                    id: 'no-submit',
                    message:'Your information was not submitted.', 
                    end: true,
                 },
                      {
                    id: 'end-message',
                    component: <Post />,
                    asMessage: true,
                    end: true,
                 },
          ]}
          {...config}
          />
          </ThemeProvider>
      );
        }
    }

export default SimpleForm; 