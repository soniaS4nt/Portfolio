import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import { About, Contact, Home, Projects, Footer, NotFound } from "../pages";

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
      <Footer />
    </>
  );
};
export default Routing;
