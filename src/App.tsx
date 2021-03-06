import React from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import Routing from "./Routing";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: { main: "#EC4846" },
          success: { main: "#5ac328" },
          type: prefersDarkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: ["Poppins", "Arial"].join(","),
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
    // <div>
    //   {loading ? <h2>Loading</h2> : (
    //     data.projectCollection.items.map((project: { title: string; image: { url: string; }; link: string; }) => (
    //       <h3>{project.title} {project.image.url} {project.link}</h3>
    //     ))
    //   )}
    // </div>
  );
}

export default App;
