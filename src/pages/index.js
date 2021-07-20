import React, { useState } from "react";
import axios from "axios";

// markup
const IndexPage = () => {
	const [value, setValue] = useState("");
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({
		message: "",
	});

	const handleInputfieldChange = (event) => {
		setValue(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setStatus({ message: "Hold on" });
		try {
			const response = await axios.post("/api/newsletter-form", {
				email: value,
			});
			setLoading(false);
			setStatus({ message: response.data.message });
			setValue("");
		} catch (error) {
			setLoading(false);
			setStatus({
				message: error.response.data.message,
			});
		}
	};

	return (
		<main className="w-full h-screen flex justify-center items-center bg-blue-400">
			<div className="bg-white p-10 md:rounded">
				<div className="mb-4">
					<h1 className="text-3xl font-bold">Join our newsletter</h1>
					<p className="text-base text-gray-600">
						Get weekly access to tutorials, tips and tricks on web development
					</p>
				</div>
				<form
					onSubmit={handleFormSubmit}
					method="POST"
					action="/api/newsletter-form"
				>
					<input
						type="email"
						name="email"
						value={value}
						placeholder="Your email address"
						className="border-2 border-gray-500 w-full  p-2 rounded mb-2"
						onChange={handleInputfieldChange}
						disabled={loading}
					/>
					<div className={`mb-4 text-sm font-medium`}>
						<p>{status.message}</p>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-full bg-black p-2 text-white font-bold rounded"
					>
						Sign Up
					</button>
				</form>
			</div>
		</main>
	);
};

export default IndexPage;
