import React from 'react'
import {motion} from 'framer-motion'
const Modal = ({selectedImage,setSelectedImage}) => {
  const handleClick =(e)=>{
    if(e.target.classList.contains('backdrop')){
      setSelectedImage(null)
    }
    e.preventDefault()
  }
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.2}}
        >
          <motion.img src={selectedImage}  alt="enlarged pic"
          initial={{y:"-100vh"}} 
          animate={{y:0}}
          />
        </motion.div>
    )
}

export default Modal
