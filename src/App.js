import { Provider } from './context';
import BasicTable from './Components/Table'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Provider>
        <Navbar />
        <BasicTable />
      </Provider>
    </div>
  );
}

export default App;
