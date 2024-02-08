// Bring in react-user-dom and the nav bar
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <style>{'body { background-color: #ACD7E6; }'}</style>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
