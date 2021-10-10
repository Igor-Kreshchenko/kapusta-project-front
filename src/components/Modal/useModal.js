import { useState } from 'react';

const useModal = () => {
    const [isShowingModal1, setIsShowingModal1] = useState(false);
    const [isShowingModal2, setIsShowingModal2] = useState(false);
    
  function toggle() {
    setIsShowingModal1(!isShowingModal1);
  }
    
  function toggleModal2() {
    setIsShowingModal2(!isShowingModal2);
  }
  
  function closeModal() {
    setIsShowingModal2(!isShowingModal2);
    setIsShowingModal1(!isShowingModal1);
  }

  return {
    isShowingModal1,
    toggle,
    isShowingModal2,
    toggleModal2,
    closeModal
  }
};

export default useModal;
