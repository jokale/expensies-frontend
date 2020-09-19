import React from 'react';


class NewExpense extends React.Component  {  
        render(){
            return (  
         <center><div>
         
         <h2>Create a new expense</h2>
         <form>

        <br></br> <label>
                Name:
                <br></br> <input type="text" name="name" /> <br></br>
                <br></br></label>  <br></br>
                <br></br> <label for="expdate">Date:</label>  <br></br>
                <br></br><input type="datetime-local" id="expense-date" name="expense-date"></input> <br></br>
                <br></br><label> detaiils</label>  <br></br>
                <br></br><textarea id="details-expense" name="d-expense"></textarea>  <br></br>
                <br></br><input type="submit" value="Submit" /> <br></br>
         
         </form>
         
         </div></center> )
        }
    
         
        
     

    

}

export default NewExpense