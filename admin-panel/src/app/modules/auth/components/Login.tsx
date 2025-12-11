/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../core/_requests";
import { useAuth } from "../core/Auth";

export function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { saveAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const resp = await login(emailOrPhone, password);
      console.log("LOGIN RESPONSE =", resp);

      // 1) SAVE TOKEN
      saveAuth({ api_token: resp.token });

      // 2) SAVE USER
      if (resp.user) {
        setCurrentUser(resp.user);
      }

      // 3) REDIRECT
      navigate("/dashboard");  // <---- FIXED

    } catch (error) {
      console.error(error);
      setErrorMsg("Invalid login details");
      saveAuth(undefined);
    }

    setLoading(false);
  };

  return (
    <form className="form w-100" onSubmit={handleSubmit}>
      <div className="text-start mb-11">
        <h1 className="text-dark fw-bold mb-4">Welcome Back!</h1>
        <div className="text-dark fs-6">Sign in to access your dashboard</div>
      </div>

      {errorMsg && (
        <div className="alert alert-danger py-2">{errorMsg}</div>
      )}

      {/* Email / Phone */}
      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-dark">
          Email or Phone <span className="text-danger">*</span>
        </label>

        <input
          type="text"
          className="form-control bg-transparent"
          placeholder="Enter your email or phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Password */}
      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-dark fs-6 mb-0">
          Password
        </label>

        <input
          type="password"
          className="form-control bg-transparent"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="d-flex flex-stack mb-8">
        <Link to="/auth/forgot-password" className="link-primary">
          Forgot Password ?
        </Link>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {!loading && <span>Sign In</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...
              <span className="spinner-border spinner-border-sm ms-2"></span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
