import React, { Component } from 'react';

import { connect } from 'react-redux';

import PersonCard from './PersonCard';

export class PeopleContainer extends Component {
    render() {
        const { people } = this.props;
        let content = '';

        content =
            people.Response === 'True'
                ? people.Search.map((perosn, index) => (
                    <PersonCard key={index} person={person} />
                ))
                : null;
        return <div className="row">{content}</div>;
    }
}

const mapStateToProps = state => ({
    people: state.people.people
});

export default connect(mapStateToProps)(PeopleContainer);