import React from 'react';

import classes from './Spinner.module.css';

function Spinner() {
  return (
    <div className={`${classes.fullScreen} fullScreen d-flex justify-content-center`}>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
