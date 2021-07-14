import { useEffect, useState } from "react";

const useResize = () => {
  const [resizeState, setstate] = useState(window.innerWidth < 801);
  useEffect(() => {
    const update = () => setstate(window.innerWidth < 801);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return { resizeState };
};
export default useResize;
