import { AppProvider } from "./AppContext";

import "../assets/css/App.css";

import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

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
