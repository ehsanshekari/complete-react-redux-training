import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={`${classes.fullScreen} d-flex justify-content-center`}>
      <div className="spinner-border">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
