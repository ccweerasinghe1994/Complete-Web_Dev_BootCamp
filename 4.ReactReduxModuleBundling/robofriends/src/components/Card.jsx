import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div
      key={id}
      className='bg-light-green dib br3-l pa3 ma3 grow bw2 shadow-5'
    >
      <img src={`https://robohash.org/${id}?200x200`} alt='card' />
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default Card;
