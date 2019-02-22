import React, {useEffect, useState} from 'react';
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

const items = [];
var obj = {}

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
    const [secrets, setSecrets] = useState([]);

    const decodeImages = async (image) => {
      const s = await decode(image);
      items.push(setSecrets([s]));
    }
    
    useEffect(() => {
      for(var i = 0; i <images.length; i++){
        decodeImages(images[i]);
      }
    }, [])
    
    const imageTags = 
      images.map(
        i=><img src={i} />
      )
    
    return <h1>{secrets}</h1>;
  }

  ReactDOM.render(
    <MyCmponent/>,
    // <CmponentText/>,
    // console.log(decode('./1.png')),
    document.getElementById('root')
  );