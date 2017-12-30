import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import Content from './Content';


class Layout extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div style={{ height: 50 }}></div>
                <Content />
            </div>
        );
    }
}


export default Layout;
