export default function Usercard({user}){
    return(
       <>
        <h3>user name:{user.name}</h3>
        <p>role:{user.role}</p>
        <p>country:{user.country}</p>
</>
    );
}