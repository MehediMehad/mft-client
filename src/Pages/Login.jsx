import { useState } from 'react';
import axios from 'axios';
import img from '/money.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        identifier,
        pin,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex justify-center gap-x-10 items-center h-screen bg-gray-100">
        <img src={img} alt="" className='hidden md:block' />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <div className="w-3/6 mx-auto mb-6">
            <img src={img} alt="" />
        </div>
        <h2 className="text-2xl -m-10 text-center">Login</h2>
        <input
          type="text"
          placeholder="Email or Phone"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      <small className='mt-2'>don&lsquo;t have an account yet?<Link to='/register' className='text-blue-600 underline ml-1'>Register</Link></small>
      </form>
    </div>
  );
};

export default Login;