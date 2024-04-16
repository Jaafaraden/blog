import useFetch from "./useFecth";

const UserList = ()=>{
    const {data, loading } =
    useFetch('https://jsonplaceholder.typicode.com/users')

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {
                User.map((user)=>{
                    return (
                        <div key={user.id}> 
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <h2>{book.name}</h2>
                    

                        </div>
                   
            )
          } )
            }
        </div>
    )
}
export default UserList;