
import { useState, useEffect } from "react";

function UserFetcher() {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            
        })
        .catch(error => {
            console.error("There was an error fetching the users", error);
            
        });
    }, []);

    

    return (
        <table>
            <thead>
            <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>gender</th>
            <th>email</th>
            <th>username</th>
            <th>domain</th>
            <th>ip</th>
            <th>university</th>
        
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>

                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.domain}</td>
                    <td>{user.ip}</td>
                    <td>{user.university}</td>
            
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default UserFetcher;
