import React from 'react';
import { Header } from 'semantic-ui-react';

import Nav from './Nav';

const TopofPage = () => {
    return (
        <div>
            <Header as='h1'> Maggie's Portfolio </Header>
            <Nav />
        </div>
    )
}

export default TopofPage;