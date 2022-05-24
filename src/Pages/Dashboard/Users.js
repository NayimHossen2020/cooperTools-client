import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import UserRow from './UserRow';

const Users = () => {
    // const [users, setUser] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/user`, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, [])

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
        res.json()
    )
    )
    if (isLoading) {
        <Loading />
    }


    return (
        <div>
            <PageTitle title="users"></PageTitle>
            <h2>This is My Order: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id} user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;