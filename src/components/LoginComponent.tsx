import { CredentialResponse, GoogleLogin, googleLogout } from "@react-oauth/google"
import { Button } from "flowbite-react";
import DecodeJWT from "../utils/DecodeJWT";

const LoginComponent = () => {

    function handleSuccess(credentialResponse: CredentialResponse) {
      console.log("Credenciales: ", credentialResponse);
      if (credentialResponse.credential) {
        const { payload } = DecodeJWT(credentialResponse.credential);
        console.log("payload credentials: ", payload);
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
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />
            <br />
            <div className="w-full flex justify-center">
                <Button className="text-white bg-red-700 w-fit focus:ring-0" onClick={() => {handleLogout}}>Logout</Button>
            </div>
        </div>
      </>
    );
};

export default LoginComponent