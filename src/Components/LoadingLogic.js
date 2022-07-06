import React from 'react';
import FileSaver from 'file-saver';

const LoadingLogic = () => {
  var blob = new Blob(['Swaminathan'], { type: 'text/plain;charset=utf-8' });
  FileSaver.saveAs(blob, 'swami.txt');
  return <div>File is Saved</div>;
};

export default LoadingLogic;
