import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='full Name' required />
            <input type="email" placeholder='Example@gmail.com' required />
            <textarea placeholder='write Here....' name='message'></textarea>
            <input type="submit" value='Send' />
        </form>
      
    </div>
  )
}

export default Contact
