import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <section className='subscribe-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Connect With Our Community</h2>
            <div className='bar'></div>
            <p>
              Sign up for our newsletter and keep up to date with all the new
              things happening here at Truthink.
            </p>
          </div>

          <form className='newsletter-form'>
            <input
              type='email'
              className='form-control'
              placeholder='Your Email Address'
              name='EMAIL'
              required={true}
            />
            <button className='btn btn-primary' type='submit'>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Subscribe;
