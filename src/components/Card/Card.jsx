import React from 'react';

const Card = ({ title, description, imageUrl, href }) => {
  return (
    <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <img src={imageUrl} alt={title} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
