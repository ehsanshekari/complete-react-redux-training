import React from 'react';

import classes from './Loading.module.css';

function Loading() {
  return (
    <div className={`${classes.fullScreen} d-flex justify-content-center`}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
