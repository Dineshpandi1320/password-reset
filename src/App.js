import "./App.css";
import { Routes, Route,  } from "react-router-dom";
import { PhoneList } from "./PhoneList";
import { LoginPage } from "./LoginPage";
import { SignUpPage } from "./SignUpPage";
import { ForgetPass } from "./Forget";
import { VerifyOtp } from "./VerifyOtp";
import { NewPassword } from "./newPassword";
import { EmailVerification } from "./EmailVerification";
import './global.js'; 

function App() {
 
  return (
    <div className="App">
  
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forgetpassword" element={<ForgetPass />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/mailverification" element={<EmailVerification />} />
        <Route path="/setpassword" element={<NewPassword />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/mobiles" element={<PhoneList />} />
      </Routes>
    </div>
  );
}


export default App;