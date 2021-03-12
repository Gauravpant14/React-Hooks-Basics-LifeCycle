import React, {useState} from 'react'

function HookCounter3() {
    const [name , setName] = useState({firstName : '', lastName: ''})
    return (
        <div>
           <form>
               {/* Here in setState we are using spread op that is copying every value from name and after giving coma (,) it is overriding the first name field with differert value  */}
               <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
               <input type="text" value={name.lastName} onChange={e => setName({...name, lastName:e.target.value})}/>
               <h2> Your first name is - {name.firstName}</h2>
               <h2>Your last name is - {name.lastName} </h2>
               </form> 
        </div>
    )
}

export default HookCounter3
