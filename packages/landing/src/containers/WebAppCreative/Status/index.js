import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { SERVICE_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import StatusArea, { Col, Row } from './status.style';
import fetch from "isomorphic-unfetch";

export async function getData() {
    const res = await fetch('https://centelles.urbban.tech/api/events/chVdJkqwNDFXh8cV5S0OzWGwW5jTeu3R/shuffle')
    const data = await res.json()
    console.log(data);
    return data
  }

const Status = () => {

    let data = getData();

    // const res = await fetch('https://centelles.urbban.tech/api/events/chVdJkqwNDFXh8cV5S0OzWGwW5jTeu3R/shuffle')
    // const data = await res.json();
  //return data
    
    //console.log(data);

  return (
    <StatusArea id="service_section">
      <Container>
        <Row>
            

        
            
          {/* {data?.map(({ image }, index) => (
            <Text content={image} />
          ))} */}
          
          {/* {SERVICE_DATA?.map(({ icon, title, text }, index) => (
            <Col key={`service-post-key-${index}`}>
              <Box className="servicePost">
                <div className='service-icon' style={{"--width": `${icon?.width}px`}}>
                  <Image src={icon} alt="" />
                </div>
                <Box className="content">
                  <Heading as="h3" content={title} />
                  <Text as="p" content={text} />
                </Box>
              </Box>
            </Col>
          ))} */}
        </Row>
      </Container>
    </StatusArea>
  );
};

export default Status;
