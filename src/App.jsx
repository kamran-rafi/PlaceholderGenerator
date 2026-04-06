import { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';

import Input from './components/Input/Input';
import Button from './components/Button/Button';

const Selector = props => {

  const { value, changeCallback } = props

  return (
    <select value={value} onChange={changeCallback}>
      <option value="png">png</option>
      <option value="jpeg">jpeg</option>
      <option value="svg">svg</option>
    </select>
  )
}

const App = () => {
  const [filename, setFilename] = useState("")
  const [filetype, setFiletype] = useState("png")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")

  const imageContainer = useRef()

  const downloadImage = () => {
    const current = imageContainer.current;

    let convertFn;

    if (filetype === "jpeg") {
      convertFn = htmlToImage.toJpeg;
    } else if (filetype === "svg") {
      convertFn = htmlToImage.toSvg;
    } else {
      convertFn = htmlToImage.toPng;
    }

    convertFn(current,
      {
        canvasWidth: width || 128,
        canvasHeight: height || 128,
        pixelRatio: 1,
      }
    ).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${filename.trim() || "placeholder"}.${filetype || "png"}`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <>
      <Navigation />
      <Welcome />
      <Input hint="placeholder" value={filename} changeCallback={e => setFilename(e.target.value)} />
      <Selector value={filetype} changeCallback={e => setFiletype(e.target.value)} />
      <div>
        <Input hint="width 128" value={width} changeCallback={e => setWidth(e.target.value)} type="number"/> 
        <span> x </span> 
        <Input hint="height 128" value={height} changeCallback={e => setHeight(e.target.value)} type="number" />
      </div>
      <div
        ref={imageContainer}
        style={{ width: "320px", height: "320px", backgroundColor: "yellow" }}
      ></div>
      <Button title="Download" clickCallback={downloadImage} />
    </>
  )
}

export default App
