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
         <Form>
           <Form.Group className='mb-3 d-flex'>
             <Form.Label className='w-25  align-self-center text-md-end mx-md-3'>How Many Horns?</Form.Label>
             <Form.Select
               aria-label="Default select example"
               onChange={this.dataSubmited}
               name="filter"
               className='w-50 justify-self-center'
             >

               <option value='-5'>All</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
               <option value="100">Wow</option>

             </Form.Select>
           </Form.Group>
         </Form>
       </div>
     );

   }
}

export default FilterJS;
