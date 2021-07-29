import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



class FilterJS extends React.Component{
   dataSubmited = (event) => {
     event.preventDefault();
     this.props.filterData(parseInt(event.target.value));
   }

   render(){


     return (

       <div>

         <Form className='selectForm'>
           <Form.Group controlId="exampleForm.SelectCustom">
             <Form.Label>Number Of Horns</Form.Label>
             <Form.Control as="select" custom onChange={this.dataSubmited}>
               <option value='-5'>All</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
               <option value="100">Wow</option>

             </Form.Control>
           </Form.Group>
         </Form>
       </div>
     );

   }
}

export default FilterJS;
