import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Input from '../ui/input';
import Textarea from '../ui/textarea';
import Select from '../ui/select';
import Button from '../ui/button';

import './contact-page.css';


class ContactPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    purpose: '',
    message: '',
  }

  options = [
    { value: 'question', label: 'Question' },
    { value: 'hire', label: 'Hire Me' },
    { value: 'other', label: 'Other' },
  ];

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { firstName, lastName, email, purpose, message } = this.state;

    return (
      <article className="archive-page">
        <form onSubmit={ this.handleSubmit } className="form form--contact">
          <Input
            name='firstName'
            label='First Name'
            value={ firstName }
            onChange={ this.handleChange }
          />

          <Input
            name='lastName'
            label='Last Name'
            errorMessage="Everything is broken"
            value={ lastName }
            onChange={ this.handleChange }
          />

          <Input
            name='email'
            label='Email'
            type='email'
            value={ email }
            onChange={ this.handleChange }
          />

          <Select
            name='purpose'
            label='Purpose'
            value={ purpose }
            options={ this.options }
            onChange={ this.handleChange }
          />

          <Textarea
            name="message"
            label='Message'
            value={ message }
            onChange={ this.handleChange }
          />

          <Button type='submit'>Send Message</Button>
        </form>
      </article>
    );
  }

};

export default withRouter(ContactPage);