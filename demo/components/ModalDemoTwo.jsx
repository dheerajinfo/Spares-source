import React, { useState } from 'react';
import Modal from '../../library/components/Modal/Modal';
import ModalButton from '../../library/components/Modal/ModalButton';
import ModalContent from '../../library/components/Modal/ModalContent';
import Button from '../../library/components/Button';
import Backdrop from '../../library/components/Backdrop';

function ModalDemoTwo() {
    const[openModal, setOpenModal] = useState(false);
  return (
    <Modal>
      <ModalButton className='bg-black text-white' onClick={() => setOpenModal(true)}>Modal with Backdrop</ModalButton>

      {openModal && (
        <>
          <Backdrop onClick={() => setOpenModal(false)} />
          <ModalContent className="text-white bg-black p-6 rounded-md">
            <h1 className="text-xl">This is my Modal Content</h1>
            <Button
              className="border px-2 text-xs border-white border-opacity-10"
              onClick={() => setOpenModal(false)}
            >
              Close
            </Button>
          </ModalContent>
        </>
        )}
    </Modal>
  )
}

export default ModalDemoTwo;
