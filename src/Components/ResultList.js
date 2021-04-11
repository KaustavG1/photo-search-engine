import React from 'react';
import './ResultList.css';
import ResultListItem from './ResultListItem';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {getPhotos} from '../Redux/Actions/PhotoActions';
import searchActionCreator from '../Redux/Actions/SearchAction';

function ResultList(props) {
    function displayList() {
        return props.response.photos.photosData.results.map(el => {
            return <ResultListItem className="list-items" imageURL={el.urls.small} key={el.id} desc={el.description}/>
         });
    }

    function renderFunction() {
        if(props.response.isLoading || props.response.photos.photosData?.results?.length === 0 || props.response.photos.photosData?.results?.length === undefined) {
            return (<div></div>);
        } else {
            return (<div>
                <div className="container">
                    {displayList()}
                </div>
                <Button variant="dark" className="next-button" onClick={handleClick}>Load More</Button>
            </div>);
        }
    }

    function handleClick(evt) {
        const tmp = props.pageNum + 1;
        props.getPhotos(props.searchTerm, tmp);
        props.searchActionCreator(props.searchTerm, tmp);
    }

    return (<div>
        {renderFunction()}
    </div>);
}

const mapStateToProps = state => {
    return {
        response: state.APICallReducer,
        pageNum: state.SearchReducer.pageNum,
        searchTerm: state.SearchReducer.searchTerm
    };
}

const mapDispatchToProps = {
    searchActionCreator,
    getPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);