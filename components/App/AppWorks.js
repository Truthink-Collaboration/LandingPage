import React from 'react';

class AppWorks extends React.Component {
  render() {
    return (
      <section className='how-app-work ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>How Truthink Works</h2>
            <div className='bar'></div>
            <p>
              Truthink is an app for nuanced dissection of the most important
              issues for the purpose of being well-informed
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='app-mobile'>
                <img src='images/app-mobile.png' alt='mobile' />
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-app-works'>
                <div className='icon'>
                  <i className='icofont-downloaded'></i>
                </div>
                <h3>Debate</h3>
                <p>
                  Present your view, learn about the arguments 'for' and
                  'against' that view, adjust your content.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-app-works'>
                <div className='icon'>
                  <i className='icofont-settings'></i>
                </div>
                <h3>Compare Views</h3>
                <p>
                  Check overlaping opinions with other users, find the middle
                  ground where you and other users agree.{' '}
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
              <div className='single-app-works'>
                <div className='icon'>
                  <i className='icofont-thumbs-up'></i>
                </div>
                <h3>Engage</h3>
                <p>
                  Upvote helpful arguments. Interact to help other users find
                  the most valuable arguments on both sides of the argument.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AppWorks;
