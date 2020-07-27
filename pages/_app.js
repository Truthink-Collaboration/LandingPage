import '../public/css/bootstrap.min.css';
import '../public/css/icofont.min.css';
import '../public/css/animate.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';

import GoTop from '../components/Shared/GoTop';
import Loader from '../components/Shared/Loader';

export default withRedux(initStore)(
  class MyApp extends App {
    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <React.Fragment>
          <Head>
            <title>Truthink</title>
            <meta name='description' content='Truthink - ' />
            <meta
              name='og:title'
              property='og:title'
              content='Truthink - Debate App'
            ></meta>
            <meta name='twitter:card' content='Truthink - Debate App'></meta>
            <link rel='canonical' href='https://www.truthink.org/'></link>
          </Head>

          <Preloader>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>

            <GoTop scrollStepInPx='50' delayInMs='16.66' />

            <Placeholder>
              <Loader />
            </Placeholder>
          </Preloader>
        </React.Fragment>
      );
    }
  }
);
