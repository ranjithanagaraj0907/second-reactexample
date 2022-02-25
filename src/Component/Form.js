import React, { Component } from 'react';
import './Form.css'

 class Form extends Component {
    state={
       feedBack:[],
        name:"",
        department:"",
        rating:""
    };
     handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    };
    handleChangeDepartment=(event)=>{
        this.setState({department:event.target.value})
        
    };
    handleChangeRating=(event)=>{
        this.setState({rating:event.target.value})
    };
    handleSumbit=(event)=>{
        event.preventDefault();
        
        
        const updateobj={
            
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating,
        };
        const newtempobj=this.state.feedBack
        newtempobj.push(updateobj)
        this.setState({feedBack:newtempobj})
    
        

    }



  render() {
      const {name,department,rating}=this.state;

      const feedBackVisible=
          this.state.name===""||
          this.state.department===""||
          this.state.rating==="";

      
    return (
      <div className="container">
          <h1>
              EMPLOYEE FEEDBACK FORM
          </h1>
            <div>
              <form  className="container1">
                  <label className='label'>Name:
                      <input type="text" 
                        value={name}
                        onChange={this.handleChangeName}>
                      </input>
                      </label>
                  <label>Department: 
                      <input type="text" 
                        value={department}
                        onChange={this.handleChangeDepartment}>
                      </input>
                      </label> 
                  <label>Rating:
                      <input type="number" 
                        value={rating}
                        onChange={this.handleChangeRating}>
                      </input>
                      </label>
                  <button  onClick={this.handleSumbit} disabled={feedBackVisible} >Submit</button>

            
              </form>
              </div>
              <div className='feedback'>
                  {this.state.feedBack.map((value,index)=>{
                        return(
                            <div key={index}>
                                 {value.name} || {value.department}{" "}
                                || {value.rating}
                            </div>
                        )
                    })}
              </div>  
      </div>
    )
  }
}

export default Form