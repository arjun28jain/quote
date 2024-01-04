import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import BookmarksPage from './components/BookmarksPage/BookmarksPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/bookmarks" component={BookmarksPage} />
      </div>
    </Router>
  );
};

export default App;
