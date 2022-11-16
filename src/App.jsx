import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { motion } from 'framer-motion'

import img1 from "../src/img/peakpx.jpg"
import img2 from "../src/img/peakpx (1).jpg"
import img3 from "../src/img/peakpx (2).jpg"
import img4 from "../src/img/peakpx (3).jpg"

const images = [img1, img2, img3, img4]


function App() {
  const carousel = useRef();

  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)


  }, [])

  return (
    <div className="App">

      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >

          {images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt="Imagens do Carousel" />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}

export default App;
