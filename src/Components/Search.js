import React, { useState } from 'react';
import { connect } from 'react-redux';
import searchActionCreator from '../Redux/Actions/SearchAction';
import {getPhotos} from '../Redux/Actions/PhotoActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './Search.css';

function Search(props) {
    const [searchTerm, setSearchTerm] = useState("");
    
    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        // TODO: Fire Search Action
        if(searchTerm) {
            props.searchActionCreator(searchTerm);
            props.getPhotos(searchTerm);
            setSearchTerm("");
        } else {
            console.log("Please enter a search term");
        }
    }

    return (<div>
        <form onSubmit={handleSubmit} className="search-container">
            <Form.Control size="lg" type="text" placeholder="Search for photos" value={searchTerm} onChange={handleChange} className="search-bar" />
            <Button variant="dark" className="search-button" onClick={handleSubmit}><i className="fas fa-search"></i></Button>
        </form>
    </div>);
}

const mapDispatchToProps = {
    searchActionCreator,
    getPhotos
}

export default connect(null, mapDispatchToProps)(Search);