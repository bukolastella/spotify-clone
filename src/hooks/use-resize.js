import { useEffect, useState } from "react";

const useResize = () => {
  const [resizeState, setstate] = useState(window.innerWidth < 700);
  useEffect(() => {
    const update = () => setstate(window.innerWidth < 700);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return { resizeState };
};
export default useResize;
