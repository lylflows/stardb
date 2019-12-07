import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from '/SearchForm';
import PeopleContainer from '/PeopleContainer';
import Spinner from '../Spinner';

export class Search extends Component {
  render() {
    const { loading } = this.props;
    return (
        <div className="container">
          <SearchForm />
          {loading ? <Spinner /> : <PeopleContainer />}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.people.loading
});

export default connect(mapStateToProps)(Search);