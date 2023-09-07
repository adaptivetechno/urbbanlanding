import React from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, { SectionHeading, ReactTabs } from './dashboard.style';

import { dashboard } from 'common/data/WebAppCreative';
import { drive } from 'common/assets/image/webAppCreative/icons/drive.png';
import { display } from 'styled-system';

const Dashboard = () => {
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content={dashboard.sectionTitle} />
          <Text content={dashboard.sectionDesc} />
        </SectionHeading>
        <ReactTabs>
          <nav>
            <TabList>
              {dashboard.tabs.map((tab) => (
                <Tab key={tab.id}>{tab.title}</Tab>
              ))}
            </TabList>
          </nav>

          {dashboard.tabs.map((tab) => (
            <TabPanel key={tab.id}>
              <div className='flex'>
                <Text className="animate__animated animate__fadeInUp" content={tab.content.description} />
                <figure className="animate__animated animate__fadeInUp">
                  <NextImage src={tab.content.image} alt={tab.title} />
                </figure>
              </div>
            </TabPanel>
          ))}
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
