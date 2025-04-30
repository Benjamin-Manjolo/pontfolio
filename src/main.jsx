import "./css/main.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
