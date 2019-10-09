import React, {useState} from "react";



const ListForm = props => {

    const [list, setList] = useState({name:"",email:"",role:"",})

const handleChange = e => {
    setList({...list, [e.target.name]: e.target.value});
};

const handleSubmite = e=> {
    e.preventDefault();
    props.addListFn(list);
    setList({name:"",email:"",role:"",});
};
return(<form onSubmit={handleSubmite}>
<label htmlFor="name">Name</label>
<input id="name" value={list.name} name="name" type="text" onChange={handleChange}/>



</form>


);



}


export default ListForm;