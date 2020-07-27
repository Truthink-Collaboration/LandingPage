import React, { Component } from 'react';

class Features extends Component {
  render() {
    return (
      <section className='features-area app-features ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>How We Encourage The Conversation</h2>
            <div className='bar'></div>
            <p>
              Most controversial topics find balance in the nuanced middle
              ground. Rarely is one argument 100% correct, we hope to encourage
              the discussion that leads to informed understanding.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-features-box'>
                <div className='icon'>
                  <i className='icofont-camera'></i>
                </div>
                <h3>Snapshot Arguments</h3>
                <p>
                  Upvote and highlight the most revelant and valuable arguments
                  for each topic.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-features-box'>
                <div className='icon'>
                  <i className='icofont-responsive'></i>
                </div>
                <h3>Information on Any Device</h3>
                <p>
                  Crossplatform interaction available on all devices: mobile,
                  web and native devices.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
              <div className='single-features-box'>
                <div className='icon'>
                  <i className='icofont-hand-drag1'></i>
                </div>
                <h3>Drag and Drop</h3>
                <p>
                  Immediate interaction with moderated arguments of all
                  spectrums of discourse.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='shape7'>
          <img src='/images/shape7.png' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.png' alt='img' />
        </div>
        <div className='bg-gray shape-1'></div>
        <div className='shape6'>
          <img src='/images/shape6.png' alt='img' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape8.svg' alt='shape' />
        </div>
        <div className='shape9'>
          <img src='/images/shape9.svg' alt='shape' />
        </div>
        <div className='shape10'>
          <img src='/images/shape10.svg' alt='shape' />
        </div>
        <div className='shape11 rotateme'>
          <img src='/images/shape11.svg' alt='shape' />
        </div>
      </section>
    );
  }
}

export default Features;
