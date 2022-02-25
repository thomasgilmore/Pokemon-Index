import React from 'react';
import Header from './Header';

export default function Home({ onSearchSubmit }) {
  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} />
    </div>
  )
}
