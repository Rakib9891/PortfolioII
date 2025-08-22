import React from 'react'

function SocialLink() {
  return (
       <div className="social-link flex mt-10 mb-2 gap-4 z-10 max-w-full sm-max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto justify-center relative">
          <a className="social-items" href="/">LinkedIn</a>
          <a className="social-items" href="/">Twitter</a>
          <a className="social-items" href="/">Github</a>
          <a className="social-items" href="/">Instagram</a>
          <a className="social-items" href="/">Facebook</a>
         </div>
  )
}

export default SocialLink