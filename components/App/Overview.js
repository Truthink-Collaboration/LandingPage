import React from 'react';
import Link from 'next/link';

class Overview extends React.Component {
  render() {
    return (
      <section className='overview-section ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>More to Discover</h2>
            <div className='bar'></div>
            <p>
              Fuel your curiosity and be a part of the discussion to truly
              understand the topic.{' '}
            </p>
          </div>

          <div className='overview-box'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-6 overview-img'>
                <img src='/images/apps-img1.png' alt='image' />
              </div>

              <div className='col-lg-6 col-md-6 overview-content'>
                <div className='icon'>
                  <i className='icofont-power'></i>
                </div>
                <h3>Open-Minded Conversation</h3>
                <p>
                  Power up your problem solving. Gauge your understanding by
                  engaging an opposing view. Truthink is a place where we
                  discuss ideas, not people. No name-calling allowed.
                </p>

                <ul>
                  <li>Well-Informed Opinions</li>
                  <li>Neutrally Facilitated</li>
                  <li>Wikipedia meets Reddit</li>
                </ul>
                <Link href='/faq'>
                  <a className='btn btn-primary'>Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='overview-box'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-6 overview-content'>
                <div className='icon'>
                  <i className='icofont-share-alt'></i>
                </div>
                <h3>Share your Position with the world</h3>
                <p>
                  Be heard. All views are welcome at Truthink. We prioritize
                  free-speech and robust discussion. All views are welcome, and
                  all views will be challenged in a civil manner.
                </p>

                <ul>
                  <li>Debate all Sides</li>
                  <li>Challenge Opposing Views</li>
                  <li>Find the Common Ground</li>
                </ul>
                <Link href='/faq'>
                  <a className='btn btn-primary'>Read More</a>
                </Link>
              </div>

              <div className='col-lg-6 col-md-6 app-fetured-item'>
                <div className='app-item item-one'>
                  <i className='icofont-wink-smile'></i>
                  <h6>Community</h6>
                </div>

                <div className='app-item item-two'>
                  <i className='icofont-ebook'></i>
                  <h6>Smart Topics</h6>
                </div>

                <div className='app-item item-three'>
                  <i className='icofont-wink-smile'></i>
                  <h6>Neutral Moderators</h6>
                </div>

                <div className='app-item item-four'>
                  <i className='icofont-stock-mobile'></i>
                  <h6>Mobile Design</h6>
                </div>
              </div>
            </div>
          </div>

          <div className='overview-box'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-6 overview-content'>
                <div className='icon'>
                  <i className='icofont-users-social'></i>
                </div>
                <h3>We provide profesional staff</h3>
                <p>
                  Our dedicated-to-neutrality moderators are here to keep the
                  peaceful discussion moving forward. By definition
                  controversial topics can be upsetting, as a community we agree
                  to maintain a high level of communication. Our moderators are
                  always available to direct the conversation in a positive and
                  productive manner.
                </p>

                <ul>
                  <li>Neutral Platform</li>
                  <li>UpVote Helpful Comments</li>
                  <li>Moderate Faculty</li>
                </ul>
                <a href='/contact' className='btn btn-primary'>
                  Read More
                </a>
              </div>

              <div className='col-lg-6 col-md-6 overview-img'>
                <img src='/images/app-iso2.png' alt='image' />
              </div>
            </div>
          </div>

          <div className='overview-box modern-flexible'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-item right-icon'>
                  <div className='icon'>
                    <i className='icofont-lamp-light'></i>
                  </div>
                  <h3>Illuminate Ideas</h3>
                  <p>
                    Bring your idea to the table, challenge it, rework your
                    premise, and strengthen your beliefs.
                  </p>
                </div>

                <div className='single-item right-icon'>
                  <div className='icon'>
                    <i className='icofont-responsive'></i>
                  </div>
                  <h3>Across All Devices</h3>
                  <p>
                    Take the conversation with you, and interact across all
                    platforms.
                  </p>
                </div>

                <div className='single-item right-icon'>
                  <div className='icon'>
                    <i className='icofont-ui-timer'></i>
                  </div>
                  <h3>Timely Feedback</h3>
                  <p>
                    Respond quickly with updated arguments, engage and discuss
                    sticking points..
                  </p>
                </div>
              </div>

              <div className='col-lg-4 col-md-12 overview-img'>
                <img src='/images/feature-img-with-app.png' alt='image' />
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='single-item'>
                  <div className='icon'>
                    <i className='icofont-ui-timer'></i>
                  </div>
                  <h3>Engaging Conversation</h3>
                  <p>
                    Feel free to be a part Insult free discussions. We talk
                    about ideas, not our users.
                  </p>
                </div>

                <div className='single-item'>
                  <div className='icon'>
                    <i className='icofont-star-alt-2'></i>
                  </div>
                  <h3>Robust Community</h3>
                  <p>
                    Our community is what makes Truthink special. We are a group
                    of open-minded thinkers, willing to adjust our thinking as
                    evidence suggests.
                  </p>
                </div>

                <div className='single-item'>
                  <div className='icon'>
                    <i className='icofont-ui-timer'></i>
                  </div>
                  <h3>Always Open to Talk</h3>
                  <p>
                    No topic is out-of-bounds at Truthink. Though due to our
                    nature of reevaluating our stances as evidence develops even
                    this may be reexamined.
                  </p>
                </div>
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

export default Overview;
