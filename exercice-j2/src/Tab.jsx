import React from 'react';

const Tab = ({ title, content, isActive }) => {
  return (
    <article style={{ display: isActive ? 'block' : 'none' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Tab;