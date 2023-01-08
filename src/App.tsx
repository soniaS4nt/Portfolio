import { HashRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import Routing from "./routes";
import theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routing />
      </Router>
    </ChakraProvider>
  );
};

export default App;
