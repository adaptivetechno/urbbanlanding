import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/webAppCreative';
import ResetCSS from 'common/assets/css/style';
import Banner from 'containers/WebAppCreative/Banner';
import Navbar from 'containers/WebAppCreative/Navbar';
import TopBar from 'containers/WebAppCreative/TopBar';
import Clients from 'containers/WebAppCreative/Clients';
import HowItWorks from 'containers/WebAppCreative/HowItWorks';
import AnalyticsTool from 'containers/WebAppCreative/AnalyticsTool';
import Dashboard from 'containers/WebAppCreative/Dashboard';
import Testimonials from 'containers/WebAppCreative/Testimonials';
import Integrations from 'containers/WebAppCreative/Integrations';
import Pricing from 'containers/WebAppCreative/Pricing';
import Services from 'containers/WebAppCreative/Services';
import Video from 'containers/WebAppCreative/Video';
import Features from 'containers/WebAppCreative/Features';
import NewsFeed from 'containers/WebAppCreative/NewsFeed';
import Faq from 'containers/WebAppCreative/Faq';
import CallToAction from 'containers/WebAppCreative/CallToAction';
import Footer from 'containers/WebAppCreative/Footer';
import { GlobalStyle, ContentWrapper, CombinedSection, CornerPattern } from 'containers/WebAppCreative/webAppCreative.style';
import 'animate.css';
import Status from '../containers/WebAppCreative/Status/index';

const webAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Urbban | Tota l&#8217;actualitat municipal amb noticies, avisos i enquestes ara més visibles i accesible per tots els teus ciutadans.</title>
          <meta name="Description" content="Tota l&#8217;actualitat municipal amb noticies, avisos i enquestes ara més visibles i accesible per tots els teus ciutadans." />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;700;800&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <TopBar />
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Status />
          <Features />
          {/* <Video /> */}
          {/* <Services /> */}
          <Clients />
          <HowItWorks />
          <AnalyticsTool />
          <Dashboard />
          <Testimonials />
          <CombinedSection>
            <Integrations />
            <Pricing />
            <CornerPattern />
          </CombinedSection>
          <NewsFeed />
          <Faq />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default webAppCreative;
