import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import Home from '../routes/Home';
import Cars from '../routes/Cars';
import Categories from '../routes/Categories';


class Content extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/cars" component={Cars} />
            </div>
        );
    }
}


export default Content;