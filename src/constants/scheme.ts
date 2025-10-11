import { z } from "zod"

export const ContactSchema = z.object({
	name: z.string().min(1, { message: "Adınızı daxil edin" }),
	company: z.string().optional(),
	email: z.string().email({ message: "Email düzgün deyil" }),
	phone: z.string().min(5, { message: "Mobil nömrə düzgün deyil" }),
	message: z.string().max(500, { message: "Mesaj 500 simvoldan çox ola bilməz" }).optional(),
})

export type ContactData = z.infer<typeof ContactSchema>

export const FormSchema = ContactSchema
