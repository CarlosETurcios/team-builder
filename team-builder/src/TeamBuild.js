import React from "react";


const Team = props => {
    console.log(props);

    return (

<div className="team-list">
{props.teamList.map(list => {
    return (
        <div className="list" key={list.id}> 
        <h2>Name : {list.name}</h2>
        <p>email: {list.email}</p>
        <p>role: {list.role}</p>
        </div>
    )
})}






</div>



    )
}
export default Team;