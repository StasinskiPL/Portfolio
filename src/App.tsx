import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App: React.FC = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Technologies />
      <Footer />
    </main>
  );
};

export default App;
