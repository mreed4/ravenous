import { AppProvider } from "../AppContext";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1 className="site-name">ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    </AppProvider>
  );
}

export default App;
