import { CredentialResponse, GoogleLogin, googleLogout } from "@react-oauth/google"
import { Button } from "flowbite-react"
import { useState } from "react"

const LoginComponent:React.FC = () => {

  const [ email, setEmail ] = useState<string | null>(null);

  const handleSuccess = async(credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const response = await fetch('/api/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: credentialResponse.credential
        })
      });
      const data = await response.json();
      setEmail(data.email);
    }
  };

  function handleError() {
    console.log("Login error");
  };

  const handleLogout = () => {
    googleLogout();
  };

  return (
    <>
      <div className="grid justify-center">
        {email === null && (<GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />)}
        {email !== null && (<p>Sesión iniciada con: {email}</p>)}
        <br />
        <div className="w-full flex justify-center">
          <Button className="text-white bg-red-700 w-fit focus:ring-0" onClick={() => {handleLogout()}}>Logout</Button>
        </div>
      </div>
    </>
  );
};

export default LoginComponent