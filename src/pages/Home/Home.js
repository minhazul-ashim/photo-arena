import React from 'react';
import ArtContainer from '../../components/ArtGallery/ArtContainer/ArtContainer';
import Banner from '../../components/Banner/Banner';
import Membership from '../../components/Membership/Membership';
import PhotoContainer from '../../components/PhotoGallery/PhotosContainer/PhotoContainer';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PhotoContainer></PhotoContainer>
            <ArtContainer></ArtContainer>
            <Membership></Membership>
        </>
    );
};

export default Home;