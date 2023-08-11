import { useState } from 'react'
import Modal from "./components/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='dialog-header'>
          <button onClick={closeModal}>X</button>
          <h2>Modal Title</h2>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Cum quasi laboriosam excepturi natus fuga sequi libero modi 
          quisquam nostrum reprehenderit a inventore labore qui eaque, 
          suscipit quia expedita fugit reiciendis!</p>
      </Modal>
    </div>
  );
}

export default App;
