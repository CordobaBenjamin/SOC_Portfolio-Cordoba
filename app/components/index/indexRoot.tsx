'use client'
import React, { Fragment, useState } from 'react';
import Navbar from './index components/navbar';
import Main_tittle from './index components/main_tittle';
import About from './index components/about';
import Skills_bar from './index components/skills_bar';

const IndexRoot: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Main_tittle/>
    <About/>
    <Skills_bar/>
    </>
  )
};

export default IndexRoot;
