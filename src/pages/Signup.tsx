import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function Signup() {

  const { signUp } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmation, setconfirmation] = useState("");

  function handleSubmit(e){

  }

  return (
    <div className="container">
      <h2>SignUp</h2>
      <form>
        <label>E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
        />

        <label>Password Confirmation</label>
        <input
          value={confirmation}
          onChange={(e) => setconfirmation(e.target.value)}
          type="password"
        />

        <button className="button-block" type="submit" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
    </div>
  );
}
