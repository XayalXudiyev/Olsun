import type { ContactData } from "@/constants/scheme"
import { google } from "googleapis"
import { NextResponse } from "next/server"

const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID

export async function POST(req: Request) {
	const body = (await req.json()) as ContactData

	try {
		if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
			console.error("Missing required Google Sheets environment variables")
			return NextResponse.json(
				{ message: "Server configuration error" },
				{ status: 500 }
			)
		}

		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: GOOGLE_CLIENT_EMAIL,
				private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
			},
			scopes: [
				"https://www.googleapis.com/auth/drive",
				"https://www.googleapis.com/auth/drive.file",
				"https://www.googleapis.com/auth/spreadsheets",
			],
		})

		const sheets = google.sheets({ auth, version: "v4" })

		const range = "Contacts!A:E"
		const values = [
			[
				body.name,
				body.company || "",
				body.email,
				body.phone,
				body.message || "",
			],
		]

		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: GOOGLE_SHEET_ID,
			range,
			valueInputOption: "USER_ENTERED",
			insertDataOption: "INSERT_ROWS",
			requestBody: {
				values,
			},
		})

		return NextResponse.json({
			data: response.data,
			message: "Form submitted successfully",
		})
	} catch (error) {
		if (error instanceof Error) {
			console.error("Google Sheets Error:", error.message, error.stack)
		}

		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 },
		)
	}
}