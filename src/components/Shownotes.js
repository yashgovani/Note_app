import axios from 'axios';
import React, { useState,useMemo } from 'react';
import { categories } from '../constant/categories';
import filter from '../utils/filter';
import NoteItem from './NoteItem';

const Shownotes = () => {
  const [notes, setNotes] = useState([]);

  useState(() => {
    axios
      .get('http://localhost:3001/notes')
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [categoryFilter, setCategoryFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

  const filteredNotes = useMemo(
    () => filter(notes, categoryFilter, nameFilter,timeFilter),
    [categoryFilter, nameFilter, notes,timeFilter]
  );

  return (
    <div className="home" style={{ marginTop: '70px' }}>
      <div className="home-page">
        <div className="hero is-primary">
          <div className="hero-body container">
            <h4 className="title">Notes</h4>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 1000,
          }}
        >
          <p>
            <strong>Filter By : &nbsp;</strong>
          </p>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ width: 200 }}
          >
            <option value={''}>All Categories</option>
            {categories.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
          <input
            type="search"
            placeholder="Search for items"
            className="search-keyword"
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            style={{ marginRight: 20, width: 200 }}
          >
            <option key="0" value={''}>
              Sort By: All
            </option>
            <option key="1" value={'asc'}>
              Oldest to Latest
            </option>
            <option key="2" value={'desc'}>
              Latest to Oldest
            </option>
          </select>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: 16 }}>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <NoteItem
                key={note.id}
                note={note}
              />
            ))
          ) : (
            <p>No Results found.. &#128533; </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shownotes;
