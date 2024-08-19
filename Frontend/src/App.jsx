import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  const GoogleOauthLoginWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Login />
      </GoogleOAuthProvider>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<GoogleOauthLoginWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
