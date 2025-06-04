import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return(
    <>
    <div className="scrolltotop"><FaArrowUp /></div>
    </>
  );
}

export default ScrollToTop;
