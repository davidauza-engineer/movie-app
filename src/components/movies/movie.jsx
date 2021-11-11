import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

const Movie = ({ movie }) => {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleExpand = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Button onClick={handleExpand}>Expand</Button>
      <Modal isOpen={openModal} toggle={toggleModal}>
        Test
      </Modal>
    </>
  )
};

export default Movie;
