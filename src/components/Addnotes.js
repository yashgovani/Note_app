import axios from 'axios';
import React, { useState } from 'react';
import { categories } from '../constant/categories';

const Addnotes = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [flash, setFlash] = useState(null);

  const save = async (e) => {
    e.preventDefault();

    if (category && description) {
      const id =
        Math.random().toString(36).substring(2) + Date.now().toString(36);
      await axios.post('http://localhost:3001/notes', {
        id: id,
        category: category,
        description: description,
        time: Date.now(),
      });
      setDescription('');
      setCategory('');

      setFlash({
        status: 'is-success',
        msg: 'Product created successfully',
      });
    } else {
      setFlash({
        status: 'is-danger',
        msg: 'You missed one of the required field',
      });
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Add Notes</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={save}>
        <div className="columns is-mobile is-centered">
          <div className="column is-four-fifths">
            <div className="field">
              <label className="label">Select Category:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input"
              >
                <option value={''}>All Categories</option>
                {categories.map((x) => (
                  <option value={x}>{x}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label className="label">Description: </label>
              <textarea
                className="textarea"
                type="text"
                rows="3"
                style={{ resize: 'none' }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {flash && (
              <div className={`notification ${flash.status}`}>{flash.msg}</div>
            )}
            <div className="field is-clearfix">
              <button
                className="button is-primary is-outlined is-large is-two-fifths"
                type="submit"
                onClick={save}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addnotes;
