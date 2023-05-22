import { useEffect } from 'react'

function useOnClickOutside(ref, handler) {
  useEffect(() =>{

    const listener = (event) => {
      if(!ref.current || ref.current.contains(event.target)){
        return;
      }
      //modal 닫히는 경우
      handler(event);
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener)
  }, [ref, handler]);
}

export default useOnClickOutside