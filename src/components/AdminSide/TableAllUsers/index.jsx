import AdminAllUsers from "../../../ui/Table/AdminAllUsers"

const TableAllUsers = ({ 
    users, 
    setusers, 
    userDashes, 
    userSaved, 
   }) => {

    const TableHeaders = ['/', 'USERNAME', 'SAVED', 'DASHES']

    return (
        <section>
            <AdminAllUsers
                TableHeaders={TableHeaders}
                users={users}
                setusers={setusers}
                userDashes={userDashes}
                userSaved={userSaved}
            />
        </section>
    )
}

export default TableAllUsers