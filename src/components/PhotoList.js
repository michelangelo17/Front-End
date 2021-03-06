import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { connect } from 'react-redux'
import { deletePhoto, updatePhoto } from '../redux/actions';
import { Link } from 'react-router-dom';
import { PhotoListDiv, PhotoImg, ListContainer } from './Styles';
import PhotoCard from './PhotoCard';

const PhotoList = (props) => {
    const [photos, setPhotos] = useState([])
    useEffect(()=> {
        axiosWithAuth()
        .get('/api/photos')
        .then(res => {
            console.log(res.data)
            setPhotos(res.data)
        })
        .catch(err => {
            console.log(err.res.data)
        })
    },[setPhotos])
    
    return (
            
        <ListContainer>
            
            {photos.map(photo => {
                return (
                    <PhotoListDiv>
                        <Link to={`/dashboard/images/${photo.image_id}`}>
                            <PhotoImg
                            src={photo.url}
                            alt={photo.name}
                            />
                            {/* <StyledH2>{photo.name}</StyledH2>
                            <StyledH3>{photo.category}</StyledH3> */}
                        </Link>
                        <PhotoCard key={photo.image_id} photo={photo} delete={props.deletePhoto} upDate={props.updatePhoto}/>
                    </PhotoListDiv>
                );
            
            })}
        </ListContainer>
    )
}

const mapStateToProps = state => {
    return{
        ...state,
        photos: state.photos,
        isFetching: state.isFetching
    }
};

export default connect(mapStateToProps, { deletePhoto, updatePhoto }) (PhotoList);