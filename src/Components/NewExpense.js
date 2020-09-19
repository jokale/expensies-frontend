import React from 'react';


class NewExpense extends React.Component  {  
        render(){
            return (  
         <div>
         
         <form>

         <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
         
         </form>
         
         </div> )
        }
    
         
        
     

    

}

export default NewExpense