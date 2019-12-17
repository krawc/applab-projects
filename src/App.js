import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowDimensions from './useWindowDimensions';


function App() {

  const { height, width } = useWindowDimensions();

  const stacks = [
    {
      "website_url": "https://app-jl8053.herokuapp.com/",
      "image_name": "https://i.imgur.com/aFrq9J7.png",
      "alt": "My Plants"
    },
    {
      "website_url": "https://applab-sideproject.herokuapp.com",
      "image_name": "https://i.imgur.com/EpIElBx.png",
      "alt": "Cash Flow Application"
    },
    {
      "website_url": "https://corbin-bookmark.herokuapp.com/",
      "image_name": "https://i.imgur.com/zME3rR2.png",
      "alt": "Bookmark Bookworm"
    },
    {
      "website_url": "https://picturise.herokuapp.com/",
      "image_name": "https://i.imgur.com/5XjLM1B.png",
      "alt": "PictuRise"
    },
    {
      "website_url": "https://wakeuplazybum.herokuapp.com/",
      "image_name": "https://i.imgur.com/TpWx3PM.png",
      "alt": "Alarm Clock"
    },
    {
      "website_url": "https://shuttle-buses.herokuapp.com",
      "image_name": "https://i.imgur.com/fKkYDPu.png",
      "alt": "Shuttle Service for NYU Shanghai"
    },
    {
      "website_url": "https://motiwallpaperfinal.herokuapp.com/",
      "image_name": "https://i.imgur.com/Q7cIx7m.png",
      "alt": "MotiWall"
    },
    {
      "website_url": "https://oneinsevenbil.herokuapp.com/",
      "image_name": "https://i.imgur.com/J1jsjs4.png",
      "alt": "One in Seven Billion"
    },
    {
      "website_url": "https://sideprojhdw.herokuapp.com/",
      "image_name": "https://i.imgur.com/7DJIC4H.png",
      "alt": "Seat Reservation System"
    },
    {
      "website_url": "https://sidepro.herokuapp.com/",
      "image_name": "https://i.imgur.com/HnM6VIG.png",
      "alt": "Eat What"
    },
    {
      "website_url": "https://fantasyfootballsideproject.herokuapp.com/",
      "image_name": "https://i.imgur.com/2FEU0E3.png",
      "alt": "Joe's Fantasy Football"
    },
    {
      "website_url": "https://kimmystamagotcha.herokuapp.com/",
      "image_name": "https://i.imgur.com/A9B0bd9.png",
      "alt": "Budget Tamagotchi"
    },
    {
      "website_url": "https://guidedpositivitybreak.herokuapp.com/",
      "image_name": "https://i.imgur.com/JVbup3l.png",
      "alt": "Guided Positivity Break"
    },
    {
      "website_url": "https://nyushdensitycounter.herokuapp.com/",
      "image_name": "https://i.imgur.com/7jSQl0V.png",
      "alt": "NYUSH Floor Map"
    },
    {
      "website_url": "https://cravingforcookies.herokuapp.com/",
      "image_name": "https://i.imgur.com/oXXgsSn.png",
      "alt": "Craving for Cookies"
    },
    {
      "website_url": "https://sideprojectlyrics.herokuapp.com/",
      "image_name": "https://i.imgur.com/nhIYJMy.png",
      "alt": "All The Weeknd Lyrics"
    },
    {
      "website_url": "https://timeline10.herokuapp.com/",
      "image_name": "https://i.imgur.com/Fuo2xFE.png",
      "alt": "Pakistan: History of Economic Imbalance"
    }
  ];

  const links = stacks.map((link, i) => {

    const animDelay = Math.random() * 5000;

    const z = Math.floor(animDelay);

    return (
      <div className="stack" style={{top: 100 + (i * 50), left: ((width - 320) * Math.random(0, 1)), animationDelay: animDelay + "ms", zIndex: z}}>
        <a className="stack-link" href={link.website_url} target="_blank">
          <img className="stack-image" alt={link.alt} title={link.alt} src={link.image_name}></img>
        </a>
      </div>
    );
  });

  return (
    <div className="App">
      <marquee className="App-header">App Lab Fall 2019 E-Catalog</marquee>
      <div className="stacks">
        {links}
      </div>
    </div>
  );
}

export default App;
