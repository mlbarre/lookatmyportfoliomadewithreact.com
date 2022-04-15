import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

import TopofPage from '../components/TopofPage';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
        <TopofPage />
        <Header as='h2' attached='top'>
          Forms of Contact
        </Header>
        <Segment attached>
          email: mlbarrera1538@gmail.com | (210)-790-1023
        </Segment>
        <Footer />
      </div>
    )
}

export default Contact;