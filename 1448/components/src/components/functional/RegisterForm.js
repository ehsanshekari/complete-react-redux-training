const RegisterForm = () => {
  return (
    <div>
      <div> Register Form</div>
      <div className="container mt-5">
        <form>
          <label
            htmlFor="username"
            style={{ color: 'red', backgroundColor: 'blue' }}
          >
            username
          </label>
          <input type="text" id="username" />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
