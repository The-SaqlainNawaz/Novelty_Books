import "../SigninForm/style.css";

const signinform = () => {
  return (
    <div className="card" id="form">
      <form className="d">
        <div className="form-group">
          <label if="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label id="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label
            className="form-check-label form-text text-muted "
            id="exampleCheck1"
          >
            <i>Show Password</i>
          </label>
        </div>
        <br />
        <button type="button" id="sign-form">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default signinform;
