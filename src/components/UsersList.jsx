
const UserList = ({usersList,selectUsers,deleteUsers}) => {
return (
    <ul>
        {usersList.map(user => (
            <div className="card">
                <div className="card-content">
            <li key={user.id}> {/*La key siempre debe ir en el padre en este caso en li que encabeza la lista*/}
                <div><b>Full Name: </b>{user.first_name}{' '}{user.last_name} </div>
                <div><b>Email: </b>{user.email} </div>
                <div><b>Birthday: </b>{user.birthday} </div>
               { /*<div><b> Is Complete:</b> {list.isComplete.toString()} </div> */}
                <button className="delete" onClick={() => deleteUsers(user.id)}>Delete</button> {/*Siemrpe que se haga un onClick se le agre una funcion
            y se le vaya a pasar un parametro debe ir siempre una funcion flecha*/}
            <button className="edit" onClick={()=> selectUsers(user) }>Edit</button> {/* aqui se envia como parametro */}
            </li>
            </div>
            </div>
        )

        )}
    </ul>
)
};

export default UserList;

