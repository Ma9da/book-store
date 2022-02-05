import Icon from '@ant-design/icons/lib/components/Icon'
import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import 'materialize-css';
function NavBar() {
    return (
        <>
            <Navbar
                className="green lighten-3"
                alignLinks="right"
                brand={<a className="brand-logo" href="google.com/">Logo</a>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="">
                    Getting started
                </NavItem>
                <NavItem href="components.html">
                    Components
                </NavItem>
            </Navbar>
        </>
    )
}

export default NavBar
