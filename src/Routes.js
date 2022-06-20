import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import User from './pages/User';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Router>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
