import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from './banner.style';
import dashboard from 'common/assets/image/webAppCreative/movil.webp';
import envelope from 'common/assets/image/webAppCreative/icons/envelope.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content={["L'App municipal", <br/>,  "adaptada als ciutadans"]}
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="És hora de mantenir-nos informats, de ser participatius i de construir comunitats més fortes i connectades."
            />
            <Subscribe className="animate__animated animate__fadeInUp">
              <Input
                inputType="email"
                placeholder="Escriu el teu email"
                iconPosition="left"
                aria-label="email"
                icon={<img src={envelope?.src} alt="envelope" />}
              />
              <Button title="Començar" type="submit" />
            </Subscribe>
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast mauto">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
