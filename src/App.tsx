import React, { useState } from "react";
import { GlobalStyle, defaultTheme, darkTheme } from "./components/utils";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  AlertButton,
} from "./components/base";
import { ThemeProvider } from "styled-components";

function App(): JSX.Element {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <div className="App">My awesome app.</div>
        <Button>Button</Button>
        <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
          Button
        </PrimaryButton>
        <SecondaryButton>Button</SecondaryButton>
        <AlertButton>Alert</AlertButton>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
