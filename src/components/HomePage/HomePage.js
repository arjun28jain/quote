import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomQuote } from '../../actions/quoteActions';
import { fetchTags } from '../../actions/tagActions';
import QuoteDisplay from './QuoteDisplay';
import Dropdown from './Dropdown';
import '../../styles.css';

const HomePage = ({ quote, tags, fetchRandomQuote, fetchTags }) => {
  useEffect(() => {
    fetchRandomQuote();
    fetchTags();
  }, [fetchRandomQuote, fetchTags]);

  return (
    <div className="container">
      <h1>Quote Generator App</h1>
      <QuoteDisplay quote={quote} />
      <Dropdown tags={tags} />
      <button onClick={fetchRandomQuote}>Generate Another Quote</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ quote: state.quote, tags: state.tags });
const mapDispatchToProps = { fetchRandomQuote, fetchTags };
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
