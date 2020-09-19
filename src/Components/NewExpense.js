import React from 'react';


class NewExpense extends React.Component  {  
        render(){
            return (  
         <div>
         
         <form>

        <br></br> <label>
                Name:
                <input type="text" name="name" />
            </label>  <br></br>
            <br></br> <label for="expdate">Date:</label>  <br></br>
            <br></br><input type="datetime-local" id="expense-date" name="expense-date"></input>
            <br></br><label> detaiils</label>  <br></br>
            <br></br><textarea id="details-expense" name="d-expense"></textarea>  <br></br>
            <br></br><input type="submit" value="Submit" /> <br></br>
         
         </form>
         
         </div> )
        }
    
         
        
     

    

}

export default NewExpense