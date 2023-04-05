import "../SignupForm/style.css";

const signOut = () => {
  return (
    <div className="card" id="form">
      <form className="signup">
        <div className="form-group">
          <label id="username">Username</label>
          <input
            type="name"
            className="form-control"
            id="username"
            aria-describedby="nameHelp"
            placeholder="Username"
          ></input>
          <label id="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label id="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-group">
          <label id="confirmpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmpassword"
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default signOut;
