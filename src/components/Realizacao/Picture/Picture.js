import React from 'react';
import './Picture.css';

const Picture = (props) => {
  return (
    <section className='Picture'>
      <img src={props.picture} alt={props.altPicture} />
      <span>{props.name}</span> <br />
      <span>{props.role}</span>
    </section>
  );
}

export default Picture;
