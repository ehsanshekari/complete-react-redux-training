function Form() {
  // JSX
  const a = 10;
  const b = 20;
  const sum = (a, b) => a + b;
  const profile = {name: 'Ehsan'};
  const courses = ['javascript', 'react']; 

  return (
    <>
      <div>
        <label
          htmlFor="username"
          style={
            { backgroundColor: 'blue', color: 'red' }
          }
        >
          Username:
        </label>
        <input type="text" id="username" className="form-control" />
      </div>
      <div>
        {a}, {b}, sum, {sum(a, b)}
      </div>
      <div>
        {profile.name}
      </div>
      <div>
        {courses}
      </div>
    </>
  );
}

export default Form;
