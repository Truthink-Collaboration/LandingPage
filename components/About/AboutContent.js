import React, { Component } from 'react';

class AboutContent extends Component {
  render() {
    return (
      <section className='about-area ptb-100'>
        <div className='container'>
          <div className='row h-100 justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <div className='section-title'>
                  <h2>Our process is simple; Our product is persuasion.</h2>
                  <div className='bar'></div>
                  <p>
                    If the concept is complex, the conversation needs to occur.
                  </p>
                </div>
                <p>
                  The idea for Truthink is to conducively facilitate debate in
                  such a way that users can view the highest voted
                  user-submitted arguments for either side of important issues
                  and therefore form well-informed opinions based entirely on
                  neutrally facilitated user-submitted content.
                </p>

                <p>
                  Provided the content is facilitated and moderated effectively,
                  Truthink will be like Wikipedia meets Reddit.
                </p>

                <p>
                  The goal of the site is to make it easier for people to form
                  well-informed opinions based on neutrally facilitated content
                  as well as provide an ideal scenario in which people may be
                  inclined to think open-mindedly and arrive at well-educated
                  conclusions.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <img src='/images/marketing.png' alt='image' />
            </div>
          </div>
        </div>

        <div className='about-inner-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='about-text'>
                  <h3>Our Company</h3>
                  <p>
                    Truthink is a platform for discussion. We agree to discuss
                    divisive topics civiliy, and as a community we will move the
                    ball forward on all controversial topics.
                  </p>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='about-text'>
                  <h3>Who we are</h3>
                  <p>
                    Fans of independent thinkers, curious creators & clear
                    communicators. Truthinkers seek to understand and be
                    understood.{' '}
                  </p>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='about-text'>
                  <h3>What we Value</h3>
                  <p>
                    Truthseeking behaviour is: curious, flexible to new ideas &
                    willing to engage in civil conversation.{' '}
                  </p>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='about-text'>
                  <h3>Contact Us</h3>
                  <p>
                    If this sounds like an experiment you'd like to be a part
                    of, please reach out. We are excited to talk to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
