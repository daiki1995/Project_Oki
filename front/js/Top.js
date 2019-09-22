import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App(){
  return(
    <div>
      <Header/>
      <Mid/>
    </div>
  );
}

function Header(){
  return(
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Project OKI</h1>
          <h2 className="subtitle is-3">みんなで、育毛ポイントを稼いでO君の育毛に貢献しよう</h2>
        </div>
      </div>
    </section>
  );
}

function Mid(){

  return(
    <>
      <section className="row-box">

        <div className="column-border-box">
          <h1 className="topicks">TOPICKS</h1>

          <div className="row-box">
            <p className="contents">・一つ目 </p>
            <Link className="contents" to="/calender">カレンダー</Link>
          </div>

        </div>
      </section>
    </>
  );
}


export default App;
