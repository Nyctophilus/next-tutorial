const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>{process.env.JWT_SECRET}</p>
    </div>
  );
};
export default Login;
