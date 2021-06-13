import "./App.css";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Test from "./components/Test/Test";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Test />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
