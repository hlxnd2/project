
import React from 'react';
import { useState } from 'react';

//import './App.css';
//import ClotheList from './components/ClotheList/ClotheList';
//import { useClothes } from './hooks/useClothes';

import {data} from './../services/ApiClient'
export default function MainPage() {
  console.log('render')
    return (
      <main style={{ padding: '1rem 0' }}>
        <h2>MAIN PAGE</h2>
        <div className='container'>
          <h3 className='p-3 text-center'>React - Display a list of items</h3>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.clothes.map((clothe) => (
                  <tr key={clothe.id}>
                    <td>{clothe.title}</td>
                    <td>{clothe.category}</td>
                    <td>{clothe.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    );
}


