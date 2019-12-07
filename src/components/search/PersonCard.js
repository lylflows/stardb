
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PersonCard extends Component {
    render() {
        const { person } = this.props;
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={person.Poster} alt="Movie Cover" />
                    <h5 className="text-light card-title">
                        {person.Title} - {person.Year}
                    </h5>
                    <Link className="btn btn-primary" to={'/person/' + movie.imdbID}>
                        Person Details
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default MovieCard;