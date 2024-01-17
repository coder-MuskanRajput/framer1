import { motion } from 'framer-motion'
import React, { useState } from 'react'

const App = () => {

  const [move, setmove] = useState(false)

  // console.log(move)
  return (
    
    <div className='h-screen w-full bg-black text-white flex items-center justify-center'>
      <div onClick={() => setmove(!move)} data-slider={move} className ='slider btn h-20 w-44 bg-green-500 rounded-full p-3 flex'>
      <motion.div layout  className='circle w-14 h-14 bg-green-800 rounded-full p-4 flex items-center' transition={{duration : 1}}>

      </motion.div>
      </div>
    </div>
  )
}

export default App






// import React from 'react'

// const App = () => {
//   return (
//     <div className='h-screen w-full bg-black flex items-center justify-center'>
//       <motion.div className='box h-36 w-44 bg-red-600' transition={{delay : 1.5 , duration :1}} animate={{x:300 , y:300}} ></motion.div>
//     </div>
//   )
// }

// export default App