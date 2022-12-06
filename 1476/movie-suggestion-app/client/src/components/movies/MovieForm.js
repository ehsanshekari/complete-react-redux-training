import { useState } from 'react';

const MovieForm = (props) => {
  const [name, setName] = useState(props.initialValue.name);
  const [description, setDescription] = useState(
    props.initialValue.description
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(name, description);
  };

  return (
    <section className="vh-100 mt-3">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={onFormSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name">
                  Movie/Serial Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter your movie or series name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  className="form-control form-control-lg"
                  rows="8"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieForm;
