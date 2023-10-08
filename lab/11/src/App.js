import Main from "./components/Main/Main";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div>
      <DataProvider>
        <Main />
      </DataProvider>
    </div>
  );
}

export default App;
