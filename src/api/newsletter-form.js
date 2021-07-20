import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

export default async function newsletterFormHandler(req, res) {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({ status: 400, message: "Missing email" });
	}

	try {
		const existingUsers = await notion.databases.query({
			database_id: databaseId,
		});
		const foundUser = existingUsers.results.find(
			(user) => user.properties.Email.email === email
		);

		if (foundUser) {
			return res.status(409).json({
				status: 409,
				message: "Email already registered",
			});
		}
		await notion.pages.create({
			parent: {
				database_id: process.env.NOTION_API_DATABASE,
			},
			properties: {
				Email: {
					email,
				},
			},
		});

		return res.status(201).json({
			status: 201,
			message: "Email added successfully",
		});
	} catch (error) {
		return res.status(500).json({ status: 500, message: error.message });
	}
}
