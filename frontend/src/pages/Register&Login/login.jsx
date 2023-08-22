import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label htmlFor="">Email: </label>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="">Password: </label>
        <input
          type="Password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={ isLoading }>Log in</button>
        {error && <div>{error}</div>}
      </form>
    </>
  )
}
export default Login;