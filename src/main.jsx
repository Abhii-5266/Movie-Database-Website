import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./Componets/App";
import PROJECTROUTE from "./route";

createRoot(document.getElementById("root")).render(PROJECTROUTE);
