import Main from "./components/Main";
import { DataProvider } from "./contexts/DataContext";


function App() {
  return (
    <DataProvider>
    <div className="App">
<Main />
</div>
    </DataProvider>
  );
}

export default App;
