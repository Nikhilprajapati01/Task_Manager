import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const url = "http://localhost:8000/api/v1/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			// window.location = "/";
            navigate("/"); 
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div>
			<div >
				<div >
					<form onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" >
							Sing In
						</button>
					</form>
				</div>
				<div >
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button">
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;