"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';

const AuthUI = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await fetch(`/api/users/${encodeURIComponent(username)}`);
            if (!res.ok) {
                throw new Error('User not found');
            }

            const user = await res.json();

            if(user.password === password && user.username === username) {
                localStorage.setItem('user', JSON.stringify(user));
                router.push(`/user/${user.username}`);
            }
            else  {
                alert('Username or password incorrect');
            }
        }
        catch(error) {
            alert("error")
        }
    }

    return (
        <form 
            className="space-y-5"
            onSubmit={(e) => { e.preventDefault(); handleLogin(); }} 
        >
          <div className="">
            <label className="font-medium">Username</label>
            <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete='username'
                className="w-full mt-4 border border-black px-3 py-2 bg-transparent text-black rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 border border-black text-black px-3 py-2 rounded-lg bg-transparent"
            />
          </div>
          <button type="submit" className="w-full px-8 h-12 py-2 p mt-8 text-white  bg-black font-medium rounded-lg duration-150 hover:bg-black/75 text-lg">
            Log in
          </button>
        </form>
      );

}

export {AuthUI};