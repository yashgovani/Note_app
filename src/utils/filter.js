const filter = (notes, category, keyword, time) => {
  const arr = notes.filter(
    (note) =>
      note.category.includes(category) && filterBySearchKeyword(note, keyword)
  );
  if (time === 'asc') {
    arr.sort((a, b) => a.time - b.time);
  }
  if (time === 'desc') {
    arr.sort((a, b) => b.time - a.time);
  }
  return arr;
};

const filterBySearchKeyword = (note, keyword) => {
  if (note.description.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default filter;
