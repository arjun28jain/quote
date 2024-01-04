// components/HomePage/Dropdown.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTaggedQuote } from '../../actions/quoteActions';

const Dropdown = ({ tags, fetchTaggedQuote }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const handleTagChange = (e) => {
    const tag = e.target.value;
    setSelectedTag(tag);
    if (tag) {
      fetchTaggedQuote(tag);
    }
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="tags">Select a Tag:</label>
      <select id="tags" value={selectedTag} onChange={handleTagChange}>
        <option value="">-- Select --</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({ tags: state.tags });
const mapDispatchToProps = { fetchTaggedQuote };
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
