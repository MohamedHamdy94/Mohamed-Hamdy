import React, { useState } from 'react';
import './nav.css';
const Nav = ({categor,setcategor}) => {
  return (
    <div className="projectNav">
      <a
        onClick={() => setcategor('All')}
        className={categor === 'All' ? 'active' : ''}
      >
        All{' '}
      </a>
      <a
        onClick={() => setcategor('React')}
        className={categor === 'React' ? 'active' : ''}
      >
        React{' '}
      </a>
      <a
        onClick={() => setcategor('Angular')}
        className={categor === 'Angular' ? 'active' : ''}
      >
        Angluar{' '}
      </a>
      <a
        onClick={() => setcategor('MERN')}
        className={categor === 'MERN' ? 'active' : ''}
      >
        MERN
      </a>
      <a
        onClick={() => setcategor('MEAN')}
        className={categor === 'MEAN' ? 'active' : ''}
      >
        MEAN
      </a>
    </div>
  );
};

export default Nav;
