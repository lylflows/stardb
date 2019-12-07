import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    searchPerson,
    fetchPeople,
    setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
    onChange = e => {
        this.props.searchPerson(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchPeople(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a character ..
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Character ..."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.people.text
});

export default connect(
    mapStateToProps,
    { searchPerson, fetchPeople, setLoading }
)(SearchForm);