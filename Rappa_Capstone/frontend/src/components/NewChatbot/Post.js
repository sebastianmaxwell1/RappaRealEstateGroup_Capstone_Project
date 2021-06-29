import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, name, phone, email, subject, message } = steps;

    this.state =  { submit, name, phone, email, subject, message }; 
  }


  componentDidMount() {
    const userObject = {
      submit:this.state.submit.value,
      name:this.state.name.value,
      phone:this.state.phone.value,
      email:this.state.email.value,
      subject:this.state.subject.value,
      message:this.state.message.value,
    };
    axios.post(`http://127.0.0.1:8000/api/contacts/`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
      return (
          <div>Thank you! We look forward to helping you out! An agent will be contatcing you shortly! 😁 🏡</div>
      )
    
    }
  };


  export default Post;