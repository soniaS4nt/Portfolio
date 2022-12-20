import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import { About, Contact, Home, Projects } from "../pages";
import NotFound from "../pages/NotFound";

const Routing: React.FC = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default Routing;
