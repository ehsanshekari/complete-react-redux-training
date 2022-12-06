const Form = () => {
  return (
    <div>
      <div style={ { margin: '100px', backgroundColor: '#F2F2F2' }  }>
        <label htmlFor="my-email" className="red">
          {' '}
          Enter your email
        </label>
        <br />
        <input type="text" id="my-email" />
      </div>
    </div>
  );
};

export default Form;
