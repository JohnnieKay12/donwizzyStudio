import React, { useEffect, useState } from "react";
import "./Loader.css";
import { useLocation } from "react-router-dom";

export default function Loader() {
    const location = useLocation(); // detect route changes
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setLoading(true);
        setFadeOut(false);

        // Wait for (images/videos) on new page to load

        const handleLoad = () => {
            setFadeOut(true); // start fade animation
            setTimeout(() => setLoading(false), 800); // fade duration
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () =>
            window.removeEventListener("load", handleLoad);
    }, [location]); // re-run on every route change

    if (!loading) return null;

    return (
        <div className={`loader-overlay $ {fadeOut ? "fade-out" : ""}`}>
            <div className="loader-content">
                <h1 className="loader-title">DonWizzy Studio</h1>
                <div className="loader-spinner"></div>
            </div>
        </div>
    );
}