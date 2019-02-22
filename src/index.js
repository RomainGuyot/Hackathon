import React from 'react';
import ReactDOM from 'react-dom';

// YOUR CODE HERE
const jimp = require('jimp');
const lsb = require('lsb');
const path = require('path');
var m;

const images = [
  require('./1.png'),
  require('./2.png'),
  require('./3.png'),
  require('./4.png'),
  require('./5.png')
];

async function decode(inputImage) {
    const image = await jimp.read(inputImage);
    const json = lsb.decode(image.bitmap.data, rgb);
    const message = JSON.parse(json);
    const s = JSON.stringify(message);
    return s;
  }
  

  function rgb(n) {
    return n + Math.floor(n / 3);
  }

  const MyCmponent = () => {
    const imageTags = 
      images.map(
        i=><img src={i} />
      )
    return <h1>{imageTags}</h1>;
  }

  const CmponentText = () =>{
    const imagesmap = 
      images.map(
        i => <p>decode(i)</p> 
      )
      return <h1>{imagesmap}</h1>
  }

  ReactDOM.render(
    <MyCmponent/>,
    <CmponentText/>,
    document.getElementById('root')
  );