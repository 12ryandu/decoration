import React, { useEffect, useCallback } from "react";
import "./LoginModal.css";
import LoginForm from "./LoginForm";

const LoginModal = ({ isOpen, onClose }) => {
    // ESC 键关闭
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // 禁止背景滚动
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    // 点击遮罩关闭
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    // 未打开时不渲染 DOM
    if (!isOpen) return null;

    return (
        <div
            className="login-modal-backdrop"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label="Login Modal"
        >
            <div className="login-modal-container">



                {/* 右侧表单区 */}
                <div className="login-modal-form-panel">
                    <LoginForm onSuccess={onClose} onClose={onClose} />
                </div>
            </div>
        </div>
    );
};

export default LoginModal;