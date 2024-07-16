import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            Log in page
            <Link to='registration'>Registration</Link>
            <br />
            <Link to='register'>Register</Link>
        </div>
    );
};

export default Login;