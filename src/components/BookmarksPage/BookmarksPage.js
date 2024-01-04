import React from 'react';
import { connect } from 'react-redux';
import '../../styles.css';

const BookmarksPage = ({ bookmarks }) => {
  return (
    <div className="container">
      <h2>Bookmarks</h2>
      <ul className="bookmarks-list">
        {bookmarks.map((quote) => (
          <li key={quote.id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({ bookmarks: state.bookmarks });
export default connect(mapStateToProps)(BookmarksPage);
