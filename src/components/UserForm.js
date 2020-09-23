import React from 'react'

const UserForm=()=>{
    return(
        <form>
         <span className="formtext">
           <input type="text" placeholder="Name" required />
           <input type="text" placeholder="Phone" required />
           <input type="text" placeholder="Email" required />
            <textarea  placeholder="Question" required />
            <button type="submit">Send</button>
          </span> 
        
      </form>
    )
}
export default UserForm;