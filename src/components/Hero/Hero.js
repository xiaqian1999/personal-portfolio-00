import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        “If you don’t hear any complaints from users, they are not using the software – or your support email is broken.” - Atli Björgvin Oddsson
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1ab_gbA8tH105CcmYmdk-XkwMhmQg5hfv/view?usp=drive_link'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;