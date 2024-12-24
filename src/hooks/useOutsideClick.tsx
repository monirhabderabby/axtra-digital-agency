import { useEffect } from "react";

function useOutsideClick(ref: any, onOutsideClick: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    // Bind the event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideClick;
