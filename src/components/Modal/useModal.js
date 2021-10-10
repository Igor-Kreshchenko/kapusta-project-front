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

  return {
      isShowingModal1,
      toggle,
      isShowingModal2,
      toggleModal2,
  }
};

export default useModal;


    // function toggle3() {
    //   setIsShowing(!isShowing);
    // }

       //  function toggle () {
    //   setIsShowing(!isShowing);
    //   setIsShowing2(!isShowing2);
      
    // }