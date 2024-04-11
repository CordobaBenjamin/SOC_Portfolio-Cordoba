'use client'
import React, { Fragment, useState } from 'react';
import Navbar from './index components/navbar';
import Main_tittle from './index components/main_tittle';
import About from './index components/about';

const IndexRoot: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Main_tittle/>
    <About/>
    </>
  )
};

export default IndexRoot;
