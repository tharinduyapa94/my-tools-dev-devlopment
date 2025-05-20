// DataList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './dataActions';

const DataList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.itmKy}>{item.itmNm}</li>
      ))}
    </ul>
  );
};

export default DataList;