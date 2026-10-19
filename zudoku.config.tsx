import type { ZudokuConfig } from "zudoku";
import HomePage from "./pages/home";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "custom-page",
      path: "/",
      label: "Home",
      display: "hide",
      layout: "none",
      element: <HomePage />,
    },
    {
      type: "link",
      label: "School API",
      to: "/api/school-api",
    },
    {
      type: "link",
      label: "Petstore (Example)",
      to: "/api/petstore",
    },
  ],
  catalogs: {
    path: "/catalog",
    label: "API Catalog",
  },
  apis: [
    {
      type: "file",
      input: "./apis/school-api/openapi.yaml",
      path: "/api/school-api",
    },
    {
      type: "file",
      input: "./apis/game-journal-v2/openapi.yaml",
      path: "/api/game-journal-v2",
    },
    {
      type: "file",
      input: "./apis/mini-community/openapi.yaml",
      path: "api/mini-community",
    },
    {
      type: "file",
      input: "./apis/game-journal/openapi.yaml",
      path: "api/game-journal",
    },
    {
      type: "file",
      input: "./apis/mern-task-manager/openapi.yaml",
      path: "api/mern-task-manager",
    },
  ],
};

export default config;
