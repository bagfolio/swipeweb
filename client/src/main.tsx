import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// This polyfill adds support for smooth scrolling behavior in browsers that don't support it
if (typeof window !== 'undefined' && !('scrollBehavior' in document.documentElement.style)) {
  import('scroll-behavior-polyfill')
    .then(module => module.default())
    .catch(err => console.error("Error loading scroll-behavior-polyfill:", err));
}

createRoot(document.getElementById("root")!).render(<App />);
