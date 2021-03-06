import React, { Component } from 'react';
import Link from 'next/link';

class Content extends Component {
  render() {
    return (
      <section className='contact-info-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <i className='icofont-email'></i>
                </div>
                <h3>Mail Here</h3>
                <p>
                  <Link href='#'>
                    <a>ben@truthink.org</a>
                  </Link>
                </p>
                <p>
                  <Link href='#'>
                    <a>ben@truthink.org</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <i className='icofont-google-map'></i>
                </div>
                <h3>Visit Here</h3>
                <p>1660 Fulton St, Fresno, California</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <i className='icofont-phone'></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <Link href='#'>
                    <a>+559 456 7890</a>
                  </Link>
                </p>
                <p>
                  <Link href='#'>
                    <a>+559 452 4526</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
