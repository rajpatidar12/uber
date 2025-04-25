import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    });
    // console.log(userData);
    setemail("");
    setpassword("");
    setfirstName("");
    setlastName("");
  };

  return (
    <div>
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-3"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base w-full font-medium mb-2">
              What's our Captain's name
            </h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
            </div>
            <h3 className="text-base font-medium mb-2">
              What's our Captain's email
            </h3>

            <input
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full border text-base placeholder:text-sm"
              type="email"
              placeholder="email@exapmle.com"
            />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              required
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            Already have a account?
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
