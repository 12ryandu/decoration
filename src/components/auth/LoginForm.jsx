import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm({ onClose }) {
    const [mode, setMode] = useState("login");
    const [loading, setLoading] = useState(false);
    const [generalError, setGeneralError] = useState("");
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setGeneralError("");
    };

    const validate = () => {
        const newErrors = {};
        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email format is invalid";
        }
        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (mode === "register") {
            if (!form.username) newErrors.username = "Username is required";
            if (!form.confirmPassword) {
                newErrors.confirmPassword = "Please confirm your password";
            } else if (form.confirmPassword !== form.password) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        setGeneralError("");
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form submitted:", form);
            onClose?.();
        } catch (err) {
            setGeneralError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const switchMode = () => {
        setMode((prev) => (prev === "login" ? "register" : "login"));
        setErrors({});
        setGeneralError("");
        setForm({ email: "", password: "", confirmPassword: "", username: "" });
    };

    // 点击背景关闭
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };

    return (
        <div
            onClick={handleOverlayClick}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 99999,
            }}
        >
            <div className="login-form-wrapper">
                {/* X 关闭按钮 */}
                <button
                    type="button"
                    className="login-close-btn"
                    onClick={() => onClose?.()}
                >
                    x
                </button>

                {/* Header */}
                <div className="login-form-header">
                    <h2 className="login-form-title">
                        {mode === "login" ? "Welcome Back" : "Create Account"}
                    </h2>
                    <p className="login-form-subtitle">
                        {mode === "login"
                            ? "Sign in to continue your journey"
                            : "Join us and start exploring"}
                    </p>
                </div>

                {/* Form */}
                <form className="login-form" onSubmit={handleSubmit} noValidate>
                    {mode === "register" && (
                        <div className={`form-field ${errors.username ? "has-error" : ""}`}>
                            <label className="form-label">Username</label>
                            <input
                                className="form-input"
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="Your name"
                                autoComplete="username"
                            />
                            {errors.username && (
                                <span className="form-error">{errors.username}</span>
                            )}
                        </div>
                    )}

                    <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                        <label className="form-label">Email</label>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                        />
                        {errors.email && (
                            <span className="form-error">{errors.email}</span>
                        )}
                    </div>

                    <div className={`form-field ${errors.password ? "has-error" : ""}`}>
                        <label className="form-label">Password</label>
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            autoComplete={mode === "login" ? "current-password" : "new-password"}
                        />
                        {errors.password && (
                            <span className="form-error">{errors.password}</span>
                        )}
                    </div>

                    {mode === "register" && (
                        <div className={`form-field ${errors.confirmPassword ? "has-error" : ""}`}>
                            <label className="form-label">Confirm Password</label>
                            <input
                                className="form-input"
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                            {errors.confirmPassword && (
                                <span className="form-error">{errors.confirmPassword}</span>
                            )}
                        </div>
                    )}

                    {mode === "login" && (
                        <div className="form-forgot">
                            <button type="button" className="forgot-link">
                                Forgot password?
                            </button>
                        </div>
                    )}

                    {generalError && (
                        <div className="form-general-error">{generalError}</div>
                    )}

                    <button
                        type="submit"
                        className={`form-submit ${loading ? "is-loading" : ""}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="submit-spinner" />
                        ) : mode === "login" ? (
                            "Sign In"
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>

                {/* Switch Mode */}
                <div className="login-form-switch">
                    <span>
                        {mode === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </span>
                    <button type="button" className="switch-link" onClick={switchMode}>
                        {mode === "login" ? "Register" : "Sign In"}
                    </button>
                </div>
            </div>
        </div>
    );
}