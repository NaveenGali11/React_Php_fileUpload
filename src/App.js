import React from 'react';
import './App.css';
import styled from 'styled-components';
import FileUploadForm from './frontend/FileUploadForm';
import Navbar from './components/Navbar';

const Heading = styled.h2`
  padding: 15px;
  font-family: 'Yomogi', cursive;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading>Upload Your File Here</Heading>
      <FileUploadForm />
    </div>
  );
}

export default App;
