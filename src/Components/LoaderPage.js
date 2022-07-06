import React, { useState } from 'react';
import LoadingLogic from './LoadingLogic';

const LoaderPage = () => {
  const [fileCreate, setFileCreate] = useState(false);

  const enableFileCreate = () => {
    setFileCreate(true);
  };

  return (
    <div>
      {fileCreate ? (
        <LoadingLogic />
      ) : (
        <a href="/" onClick={enableFileCreate}>
          Click here to download File
        </a>
      )}
    </div>
  );
};

export default LoaderPage;
