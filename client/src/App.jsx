import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import Bio from './pages/Bio.jsx'
import Blog from './pages/Blog.jsx'
import Projects from './pages/Projects.jsx'
import Art from './pages/Art.jsx'
import NoPage from './pages/NoPage.jsx'
import Layout from './pages/Layout.jsx'



// The unsure zone:
import { useState } from 'react'
import './App.css'

import Header from './components/header.jsx'


const Pages = {
  HOME: 'Home',
  BIO: 'Bio',
  BLOG: 'Blog',
  PROJECTS: 'Projects',
  ART: 'Art'
}

function App() {
  const [page, setPage] = useState(Pages.HOME)

  console.log(page);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home pageTitle="Home" />} />
          <Route path="bio" element={<Bio pageTitle="Bio" />} />
          <Route path="blog" element={<Blog pageTitle="Blog" />} />
          <Route path="projects" element={<Projects pageTitle="Projects" />} />
          <Route path="art" element={<Art pageTitle="Art" />} />
          <Route path="*" element={<NoPage pageTitle="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
