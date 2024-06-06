import React from "react"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { AuthContext } from "../auth/AuthProvider"
import { Button } from "flowbite-react"
import { useNavigate } from "react-router-dom"

const LoginComponent:React.FC = () => {

  const { email, login, logout } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    login(credentialResponse);
  };

  function handleError() {
    console.log("Login error");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="grid justify-center">
        {email === null && (<GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />)}
        {email !== null && (navigate('/'))}
        <br />
        <div className="w-full flex justify-center">
          <Button className="text-white bg-red-700 w-fit focus:ring-0" onClick={() => {handleLogout()}}>Logout</Button>
        </div>
      </div>
    </>
  );
};

export default LoginComponent