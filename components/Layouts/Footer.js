import Link from 'next/link';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer-area ptb-100 pb-0 bg-image'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <Link href='#'>
                  <a className='logo'>
                    <img src='/images/logodrk.png' alt='logo2' />
                  </a>
                </Link>
                <p>
                  All Views, One Place. Be a part of an online debate in a way
                  that users can easily view the highest voted arguments for
                  either side of current political and philosophical issues.
                </p>

                <ul className='social-list'>
                  <li>
                    <Link href='#'>
                      <a>
                        <i className='icofont-facebook'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>
                        <i className='icofont-twitter'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>
                        <i className='icofont-instagram'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Support</h3>

                <ul className='list'>
                  <li>
                    <Link href='/about-one'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Press</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright-area'>
          <div className='container'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-6'>
                <p>Copyright @2020 Truthink. All rights reserved</p>
              </div>

              <div className='col-lg-6 col-md-6'>
                <ul>
                  <li>
                    <Link href='#'>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
