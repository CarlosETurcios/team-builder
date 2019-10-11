import React, {useState} from "react";



const ListForm = props => {

    const [lists, setList] = useState({name:"",email:"",role:"",})

const handleChange = e => {
    setList({...lists, [e.target.name]: e.target.value});
};

const handleSubmit = e=> {
    e.preventDefault();
    props.addListFn(lists);
    setList({name:"",email:"",role:"",});
};
return(<form onSubmit={handleSubmit}>
<label htmlFor="name">Name </label>
<input 
value={lists.name} 
name="name" 
type="text" 
placeholder="name"
onChange={handleChange}
/>
<button type="submit">Addtteam Member</button>
<label htmlFor="name">Email Address  </label>
<input id="email" 
value={lists.email} 
name="email" 
type="text" 
placeholder="example@email.com"
onChange={handleChange}
/>
<button type="submit">Add Email Address</button>
<label htmlFor="name">Role </label>
<input id="role" 
value={lists.role} 
name="role" 
placeholder="Role"
type="text" onChange={handleChange}/>
<button type="submit">Add Role</button>


</form>
);
}


export default ListForm;