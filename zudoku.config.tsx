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
  basePath: "/",
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
      input: "./apis/petstore/openapi.yaml",
      path: "/api/petstore",
    },
    {
      type: "file",
      input: "./apis/school-api/openapi.yml",
      path: "/api/school-api",
    },
  ],
};

export default config;
