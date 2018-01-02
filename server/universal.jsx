const path = require('path');
const fs = require('fs');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router-dom';
import { StaticRouter, matchPath } from 'react-router';

import createRoutes from '../src/routes';
import App from '../src/App';
//import configureStore from '../src/store'
import {Provider} from 'react-redux';

const routes = createRoutes();

import { combineReducers, createStore } from 'redux';

import * as reducers from '../src/reducers';


let reducer = combineReducers(reducers);
let store = createStore(reducer)

console.log(match);

module.exports = function universalLoader(req, res) {
  //res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

//console.log(filePath);

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    // console.log(err, htmlData);
    // console.log(match);

    // const ReactApp = renderToString(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // )
    // const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
    // res.send(RenderedApp)
    const context = {}
    const ReactApp = ReactDOMServer.renderToString(
      <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}>
                <App/>
            </StaticRouter>
          </Provider>
      
    );

    console.log(ReactApp);

    const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
    res.send(RenderedApp)

    // match({ routes, location: req.url }, (err, redirect, renderProps) => {
    //   if(err) {
    //     console.error('match err', err)
    //     return res.status(404).end()
    //   } else if(redirect) {
    //     res.redirect(302, redirect.pathname + redirect.search)
    //   } else if(renderProps) {
    //     //let storers = configureStore()
    //     const ReactApp = renderToString(
    //       <Provider store={store}>
    //         <RouterContext {...renderProps} />
    //       </Provider>
    //     )
    //     const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
    //     res.send(RenderedApp)
    //   } else {
    //     return res.status(404).end()
    //   }
    // })
  })
}

