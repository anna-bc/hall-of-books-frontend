import React from "react";
import { useState } from "react";
import RegistrationForm from "../container/RegistrationForm/RegistrationForm";
import RegistrationResponse from "../container/RegistrationForm/RegistrationResponse";

function RegistrationPage() {
  const [signedUp, setSignedUp] = useState<boolean>(false);

  return <div>
    {!signedUp ? <RegistrationForm setSignedUp={setSignedUp} /> : <RegistrationResponse />}
  </div>;
}

export default RegistrationPage;
