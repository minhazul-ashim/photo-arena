import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import PhotoContainer from './components/PhotoGallery/PhotosContainer/PhotoContainer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <PhotoContainer></PhotoContainer>
    </div>
  );
}

export default App;
