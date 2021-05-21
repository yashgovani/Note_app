import React from 'react';

const NoteItem = ({ note }) => {
  return (
    <div className="column is-half">
      <div className="box">
        <div className="media">
          <div className="media-content">{note.description}</div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
