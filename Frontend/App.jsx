

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitlePage from './components/TitlePage';

import SignUpForm from './components/SignUpForm';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-register" element={<SignUpForm />} />
        <Route path="/student-login" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
