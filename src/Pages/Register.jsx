import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        pin,
        phone,
        email,
        role,
      });
      alert(response.data.message);
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-3xl mb-4 text-center font-medium"> Welcome to Pocket</h2>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full input input-bordered my-3 rounded"
          required
        >
          <option value="user">User</option>
          <option value="agent">Agent</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full input input-bordered my-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full input input-bordered my-3 rounded"
          required
        />
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full input input-bordered my-3 rounded"
          required
        />
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full input input-bordered my-3 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded font-medium">Register</button>
      </form>
    </div>
  );
};

export default Register;
