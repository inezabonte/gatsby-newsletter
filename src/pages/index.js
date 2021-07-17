import * as React from "react";

// markup
const IndexPage = () => {
	return (
		<main className="w-full h-screen flex justify-center items-center bg-blue-400">
			<div className="bg-white p-10 md:rounded">
				<div className="mb-4">
					<h1 className="text-3xl font-bold">Join our newsletter</h1>
					<p className="text-base text-gray-600">
						Get weekly access to tutorials, tips and tricks on web development
					</p>
				</div>
				<form>
					<input
						type="email"
						required
						placeholder="Your email address"
						className="border-2 border-gray-500 w-full  p-2 rounded mb-2"
					/>
					<button
						type="submit"
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
