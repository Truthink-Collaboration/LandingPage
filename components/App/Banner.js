import React, { Component } from 'react';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;
import Link from 'next/link';
import dynamic from 'next/dynamic';
import VisibilitySensor from 'react-visibility-sensor';
import ModalVideo from 'react-modal-video';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  responsiveClass: true,
  dots: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>",
  ],
};

class Banner extends Component {
  state = {
    isOpen: false,
    display: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className='home-slides startup-home owl-carousel owl-theme'
            {...options}
          >
            <div className='main-banner startup-bg1'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='row'>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <React.Fragment>
                            <div className='col-lg-6 col-md-12'>
                              <div className='hero-content'>
                                <h1
                                  className={
                                    isVisible ? 'animated fadeInUp' : ''
                                  }
                                >
                                  Truthink: All Views, One Place
                                </h1>
                                <p
                                  className={isVisible ? 'animated zoomIn' : ''}
                                >
                                  Our passion is to combat misinformation. Our
                                  goal is an educated voter. Check out the video
                                  below for a word about the Truthink vision.
                                  From our Founder, Ben Smith.
                                </p>

                                <Link href='#'>
                                  <a
                                    className={`
                                                                    btn btn-primary ${
                                                                      isVisible
                                                                        ? 'animated zoomIn'
                                                                        : ''
                                                                    }
                                                                `}
                                  >
                                    Get Started
                                  </a>
                                </Link>
                                <Link href='#'>
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      this.openModal();
                                    }}
                                    className={`
                                                                    video-btn popup-youtube ${
                                                                      isVisible
                                                                        ? 'animated fadeInDown'
                                                                        : ''
                                                                    }
                                                                `}
                                  >
                                    Watch Video
                                    <i className='icofont-play-alt-3'></i>
                                  </a>
                                </Link>
                              </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                              <img src='/images/truthink-app3.png' />
                            </div>
                          </React.Fragment>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='main-banner startup-bg3'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='row'>
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <React.Fragment>
                            <div className='col-lg-6 col-md-12'>
                              <div className='hero-content'>
                                <h1
                                  className={
                                    isVisible ? 'animated fadeInUp' : ''
                                  }
                                >
                                  Truthink Is A Place for All Voices
                                </h1>
                                <p
                                  className={isVisible ? 'animated zoomIn' : ''}
                                >
                                  "Wikipedia meets Reddit." Form well-informed
                                  opinions based on neutrally facilitated
                                  user-submitted content. Check out the video
                                  below for a message from our Founder, Ben
                                  Smith.
                                </p>

                                <Link href='#'>
                                  <a
                                    className={`
                                                                    btn btn-primary ${
                                                                      isVisible
                                                                        ? 'animated zoomIn'
                                                                        : ''
                                                                    }
                                                                `}
                                  >
                                    Get Started
                                  </a>
                                </Link>
                                <Link href='#'>
                                  <a
                                    onClick={(e) => {
                                      e.preventDefault();
                                      this.openModal();
                                    }}
                                    className={`
                                                                    video-btn popup-youtube ${
                                                                      isVisible
                                                                        ? 'animated fadeInDown'
                                                                        : ''
                                                                    }
                                                                `}
                                  >
                                    Watch Video
                                    <i className='icofont-play-alt-3'></i>
                                  </a>
                                </Link>
                              </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                              <div
                                className={`
                                                            startup-image ${
                                                              isVisible
                                                                ? 'animated zoomIn'
                                                                : ''
                                                            }
                                                        `}
                              >
                                <img
                                  src='/images/startup-shape/board.png'
                                  className='wow fadeInDown'
                                  data-wow-delay='0.6s'
                                  alt='board'
                                />
                                <img
                                  src='/images/startup-shape/chart1.png'
                                  className='wow fadeInUp'
                                  data-wow-delay='0.6s'
                                  alt='chart1'
                                />
                                <img
                                  src='/images/startup-shape/chart2.png'
                                  className='wow fadeInLeft'
                                  data-wow-delay='0.6s'
                                  alt='chart2'
                                />
                                <img
                                  src='/images/startup-shape/check-mark.png'
                                  className='wow zoomIn'
                                  data-wow-delay='0.6s'
                                  alt='check-mark'
                                />
                                <img
                                  src='/images/startup-shape/girl1.png'
                                  className='wow bounceIn'
                                  data-wow-delay='0.6s'
                                  alt='girl1'
                                />
                                <img
                                  src='/images/startup-shape/girl2.png'
                                  className='wow fadeInDown'
                                  data-wow-delay='0.6s'
                                  alt='girl2'
                                />
                                <img
                                  src='/images/startup-shape/line.png'
                                  className='wow zoomIn'
                                  data-wow-delay='0.6s'
                                  alt='line'
                                />
                                <img
                                  src='/images/startup-shape/man.png'
                                  className='wow fadeInUp'
                                  data-wow-delay='0.6s'
                                  alt='man'
                                />
                                <img
                                  src='/images/startup-shape/progress.png'
                                  className='wow rotateIn'
                                  data-wow-delay='0.6s'
                                  alt='progress'
                                />
                                <img
                                  src='/images/startup-shape/table.png'
                                  className='wow fadeInUp'
                                  data-wow-delay='0.6s'
                                  alt='table'
                                />
                                <img
                                  src='/images/startup-shape/main-image.png'
                                  className='wow fadeInUp'
                                  data-wow-delay='0.6s'
                                  alt='main-image'
                                />
                              </div>
                            </div>
                          </React.Fragment>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId='uVXLaHu1T84'
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default Banner;
