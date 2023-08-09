import React from 'react'
import {useEffect, useLayoutEffect, useRef} from 'react'
import './PageComponent.css'

function PageComponent({title, subtitle, background}) {
  const style = { backgroundImage: `url("${background}")` };
  
  const bgRef = useRef();
  const centerRef = useRef();
  const pageRef = useRef();
  const staticRef = useRef();
  
  // useLayoutEffect for post-render logic
  useLayoutEffect(() => {
    const {offsetTop, offsetHeight} = centerRef.current;
    const pageHeight = pageRef.current.offsetHeight;
    const style = bgRef.current.style;
    
    style.left    = 0;
    style.right   = 0;
    style.top     = `-${offsetTop}px`;
    style.bottom  = `${offsetTop + offsetHeight - pageHeight}px`;
  });
  
  // useEffect for subscriptions
  useEffect(() => {
    const handleScroll = () => {
      const {scrollTop} = scrollingElement;
      const offset = scrollTop - pageRef.current.offsetTop;
      staticRef.current.style.clipPath = `inset(${-offset}px 0 0)`;
    }, {scrollingElement} = document;    
    
    handleScroll();
    document.addEventListener('scroll', handleScroll);
    
    // Clean up scroll listener on unmount
    return () => document.removeEventListener('scroll', handleScroll);
  });
  
  return (
    <div className="page" style={style} ref={pageRef}>
      <div className="static" ref={staticRef}>
        <div className="centered" ref={centerRef}>
          <div className='bg' style={style} ref={bgRef} />
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default PageComponent