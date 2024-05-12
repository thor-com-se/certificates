import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: {
      value: "",
      isTouched: false,
    },
    role: "role",
  }
  const [firstName, setFirstName] = useState(initialState.firstName);
  const [lastName, setLastName] = useState(initialState.lastName);
  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);
  const [role, setRole] = useState(initialState.role);

  const getIsFormValid = () => {
    if (firstName == "") {
      return false;
    };
    if (!validateEmail(email)) {
      return false;
    };
    if (password.value.length < 8) {
      return false;
    };
    if (role == "role") {
      return false;
    };
    return true;
  };

  const clearForm = () => {
    setFirstName(initialState.firstName);
    setLastName(initialState.lastName);
    setEmail(initialState.email);
    setPassword(initialState.password);
    setRole(initialState.role);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" value={password.value} onChange={e => setPassword({value: e.target.value, isTouched: true})} />
            {password.isTouched && password.value.length < 8 && (<PasswordErrorMessage />)}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
