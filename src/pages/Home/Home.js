import React from 'react';
import ArtContainer from '../../components/ArtGallery/ArtContainer/ArtContainer';
import Banner from '../../components/Banner/Banner';
import PhotoContainer from '../../components/PhotoGallery/PhotosContainer/PhotoContainer';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PhotoContainer></PhotoContainer>
            <ArtContainer></ArtContainer>
        </>
    );
};

export default Home;