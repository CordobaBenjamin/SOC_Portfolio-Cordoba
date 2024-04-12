'use client'
import React, { Fragment, useState } from 'react';
import Navbar from './index components/navbar';
import Main_tittle from './index components/main_tittle';
import About from './index components/about';
import Skills_bar from './index components/skills_bar';
import Learning_card from './index components/learning_card';
import WhyMe_card from './index components/whyMe_card';
import Contact from './index components/learning_card';

const IndexRoot: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Main_tittle/>
    <About/>
    <Skills_bar/>
    <Learning_card/>
    <WhyMe_card/>
    </>
  )
};

export default IndexRoot;
