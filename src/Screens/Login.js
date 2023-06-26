import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // Add this line
import apple from "../Assets/apple.svg";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login(props) {
  const { setLoginDetails } = props;
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuote();
      setQuote(data);
    };

    fetchData();
  }, []);

  const styles = {
    title: {
      color: "#FFF",
      fontSize: "72px",
      fontFamily: "Montserrat",
      fontWeight: "700",
    },
    textStyle: {
      color: "#000",
      fontSize: "16px",
      fontFamily: "Lato",
    },
  };

  const savingState = (details) => {
    setLoginDetails(details);
  };

  const getQuote = async () => {
    try {
      const url = "https://api.quotable.io/random";
      const response = await axios.get(url);
      const data = response.data.content;
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 place-items-center min-h-screen">
      <div
        className="flex min-h-screen w-full"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="m-auto" style={styles.title}>
          Board.
        </div>
      </div>
      <div
        className="flex min-h-screen w-full"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="flex flex-col justify-center items-center min-h-screen w-full">
          <div
            style={{
              color: "#000",
              fontSize: "36px",
              fontFamily: "Montserrat",
              fontWeight: "700",
              width: "385px",
            }}
          >
            Sign In
          </div>
          <div
            style={{
              paddingTop: "5px",
              paddingBottom: "26px",
              color: "#000",
              fontSize: "16px",
              fontFamily: "Lato",
              width: "385px",
            }}
          >
            Sign in to your account
          </div>
          <div className="flex justify-between pb-6" style={{ width: "385px" }}>
            <span>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const details = jwt_decode(credentialResponse.credential);
                  savingState(details);
                  console.log(details);
                  console.log(credentialResponse);
                  navigate("/home"); // Navigate to /home after successful login
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </span>

            <span
              style={{
                borderRadius: "5px",
                width: "182px",
                height: "44px",
                backgroundColor: "#FFF",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bolder",
                fontFamily: "Montserrat",
                lineHeight: "44px",
              }}
            >
              <img
                src={apple}
                alt="logo"
                style={{
                  height: "20px",
                  width: "20px",
                  display: "inline-block",
                  marginRight: "10px",
                }}
              />
              Sign in with Apple
            </span>
          </div>
          <form
            className="bg-white px-8 pt-6 pb-8 mb-4"
            style={{ width: "385px", borderRadius: "20px" }}
          >
            <div className="mb-4" style={styles.textStyle}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email Address
              </label>
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email Address"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#F5F5F5",
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#F5F5F5",
                }}
              />
            </div>
            <div
              className="inline-block align-baseline hover:text-blue-800"
              style={{
                ...styles.textStyle,
                color: "#346BD4",
                marginBottom: "25px",
              }}
            >
              Forgot Password?
            </div>
            <div
              className="flex items-center justify-center bg-black h-10"
              style={{ borderRadius: "10px" }}
            >
              <div
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                }}
              >
                Sign In
              </div>
            </div>
          </form>
          <div
            className="pt-5"
            style={{ ...styles.textStyle, color: "#858585" }}
          >
            Don't have a account?
            <span style={{ color: "#346BD4" }}> Register here</span>
          </div>
          <div className="p-2">
            <span style={{ fontWeight: "700" }}>Random Quote: </span>
            {quote}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
