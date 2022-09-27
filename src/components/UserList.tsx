import React, {useEffect} from 'react';
import { useActions } from '../hooks/useActions';

import { useTypedSelector } from '../hooks/useTypedSelector';


const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);    
    const {fetchUsers} = useActions();
    
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name} - {user.email} - <span style={{fontWeight: 'bold'}}>{user.phone}</span></div>
            )}
        </div>
    );
};

export default UserList;