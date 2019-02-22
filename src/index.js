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

async function decode(inputImage) {
    const image = await jimp.read(inputImage);
    const json = lsb.decode(image.bitmap.data, rgb);
    const message = JSON.parse(json);
    // const s = JSON.stringify(message);
    return message;
  }
  

  function rgb(n) {
    return n + Math.floor(n / 3);
  }

  const MyCmponent = () => {
    const [secrets, setSecrets] = useState([]);

    const decodeImages = async (image) => {
      const items = [];
      for (let x = 0; x < images.length; x++) {
        const s = await decode(images[x]);
        items.push(s);
      } 

      console.log(items);
      items.sort((a, b) => a.index - b.index);
      console.log(items);
     

      setSecrets(items);
    }
    
    useEffect(() => {
      decodeImages();
    }, [])
    
    const imageTags = 
      images.map(
        i=><img src={i} />,
      )

    return <h1>{imageTags}, {secrets.map(s => s.message)}</h1>;
  }

  ReactDOM.render(
    <MyCmponent/>,
    document.getElementById('root')
  );