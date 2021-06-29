import React, { Component } from 'react';
import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import Post from './Post';


//config options

const config ={
    width: "400px",
    height: "500px",
    floating: true,
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
              message:'Almost done! what is you email?', 
              trigger:'email',
            },
            {
              id:'email', 
              user:true,
              trigger:'q-subject'
            },
            {
              id:'q-subject', 
              message:'Does this pretain to buying, selling or renting a home?', 
              trigger:'subject',
            },
            {
              id:'subject',
              user:true,
              trigger:'q-message',
            },
            
            {
              id:'q-message',
              message:'Finally! Please list all questions and concerns here!',
              trigger:'message',
            },
            {
              id:'message',
              user:true,
              trigger:'q-submit',
            },
            {
                id:'q-submit',
                message:'Do you wish to submit?',
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