import './App.css';
import Tabs from './components/tabs';

function App() {
    return (
        <>
        <Tabs />
        <main className="mx-3">
          <Outlet />
        </main>
      </>
    );
}

export default App;
