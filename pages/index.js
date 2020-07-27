import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/App/Banner';
import Features from '../components/App/Features';
import AppWorks from '../components/App/AppWorks';
import Overview from '../components/App/Overview';
import Funfact from '../components/App/Funfact';
import Subscribe from '../components/App/Subscribe';

class HomeTwo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Features />
        <AppWorks />
        <Overview />
        <Subscribe />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomeTwo;
