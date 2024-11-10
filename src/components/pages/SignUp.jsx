import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/ContextProvider";

const SignUp = () => {
  const { userCreate } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);

    //create user with sign up
    const createUser = userCreate(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <h3 className="text-3xl font-bold text-center py-4">Please Sing Up:</h3>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <div>
            <h3>
              Haven already an account? please:-
              <Link
                className="text-primary text-lg font-medium underline underline-offset-2"
                to="/login"
              >
                Login
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
