import React from "react";


const Team = props => {
    console.log(props);

    return (

<div className="team-list">
{props.teamList.map(list => {
    return (
        <div className="list" key={list.name}> 
        <h2>{list.email}</h2>
        <p>{list.role}</p>
        </div>
    )
})}






</div>



    )
}
export default Team;