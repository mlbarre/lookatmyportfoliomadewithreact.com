import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

import About from '../pages/About.js';
import Contact from '../pages/Contact.js';

const Nav = () => {
    return (
        <div>
            <Container textAlign='right'>
                <Menu>
                    <Menu.Item header href={About}>About</Menu.Item>
                    <Menu.Item header href={Contact}>Contact</Menu.Item>
                    <Menu.Item header href='http://www.github.com/mlbarre'>Github</Menu.Item>
                </Menu>
            </Container>
        </div>
    )
}

export default Nav;