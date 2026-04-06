import { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import Input from './components/Input/Input';
import Button from './components/Button/Button';

const App = () => {
  const [filename, setFilename] = useState("")

  const imageContainer = useRef()

  const downloadImage = () => {
    const current = imageContainer.current
    htmlToImage
      .toPng(current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${filename.trim() || "placeholder"}.png`;
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <div>
      <Input value={filename} changeCallback={e=>setFilename(e.target.value)} />
      <div
        ref={imageContainer}
        style={{ width: "512px", height: "256px", backgroundColor: "yellow" }}
      ></div>
      <Button title="Download" clickCallback={downloadImage} />
    </div>
  )
}

export default App
