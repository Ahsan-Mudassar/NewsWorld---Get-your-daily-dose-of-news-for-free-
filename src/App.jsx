import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import './index.css';

export default function App() {

  const pageSize = 5
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
      <NavBar setQuery={setQuery} />
      <Routes>

        <Route path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} query={query} category="general" />} />

        <Route path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} query={query} category="business" />} />

        <Route path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} query={query} category="entertainment" />} />

        <Route path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} query={query} category="general" />} />

        <Route path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} query={query} category="health" />} />

        <Route path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} query={query} category="science" />} />

        <Route path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} query={query} category="sports" />} />

        <Route path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} query={query} category="technology" />} />

      </Routes>

    </div>
  )
}