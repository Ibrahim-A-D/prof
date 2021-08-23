import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import CardList from "./components/card-list/CardList";
import Searchbar from "./components/header/Searchbar";
import Navbar from "./components/header/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      {/* <CardList /> */}
      <Footer />
    </div>
  );
}

export default App;
