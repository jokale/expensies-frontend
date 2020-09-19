import React from 'react';


class NewExpense extends React.Component  {  
        render(){
            return (  
         <center><div>
         
         <h2>Create a new expense</h2>
         <form>

                 <br></br> <label>Title</label><br></br>
                <br></br> <input type="text" name="name" placeholder="Burgers with Sally" /> <br></br>
                <br></br> <label for="expdate">Date:</label>  <br></br>
                <br></br><input type="datetime-local" id="expense-date" name="expense-date" placeholder="00/00/00 at 00:00"></input> <br></br>
                <br></br><label> Details</label>  <br></br>
                <br></br><textarea id="details-expense" name="d-expense" placeholder="I had a burger at ..."></textarea>  <br></br>
                <br></br><label> Amount (in GBP)</label>  <br></br>

                <br></br> <input type="number" name="amount"  placeholder="£00000"/>  <br></br>

                
                <br></br><input type="submit" value="Submit" /> <br></br>
         
         </form>
         
         </div></center> )
        }
    
         
        
     

    

}

export default NewExpense