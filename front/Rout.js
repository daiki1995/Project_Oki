import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './js/Top.js';
import Calender from './js/calender.js'

function Root(){
  return(
    <BrowserRouter>
      <div>
        <Route exact path ="/" component={App}/ >
        <Route path="/calender" component={Calender}/ >
      </div>
    </BrowserRouter>

  );
}

export default Root;
