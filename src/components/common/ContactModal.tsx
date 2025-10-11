"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type Path, type FieldError } from "react-hook-form"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { toast } from "sonner"
import { ContactSchema, type ContactData } from "@/constants/scheme"

export default function ContactModal() {
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
        reset,
    } = useForm<ContactData>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
        resolver: zodResolver(ContactSchema),
        mode: "onChange",
    })

    const messageValue = watch("message") ?? ""

    const onSubmit = async (data: ContactData) => {
        try {
            toast.loading("Müraciətiniz göndərilir...", {
                id: "contact-form"
            })
            
            const response = await fetch("/api/sheets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                toast.success("Müraciətiniz uğurla göndərildi!", {
                    id: "contact-form",
                    description: "Tezliklə sizinlə əlaqə saxlayacağıq."
                })
                setOpen(false)
                reset()
            } else {
                toast.error("Xəta baş verdi", {
                    id: "contact-form",
                    description: "Zəhmət olmasa yenidən cəhd edin."
                })
            }
        } catch (error) {
            toast.error("Bağlantı xətası", {
                id: "contact-form",
                description: "İnternet bağlantınızı yoxlayın və yenidən cəhd edin."
            })
        }
    }




    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg">
                    <Image src="/images/icons/Vector.svg" alt="icon" width={18} height={18} />
                    Müraciət göndərin!
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Hotellər — Müraciət</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {(() => {
                        const fields: Array<{
                            name: keyof ContactData
                            label: string
                            placeholder?: string
                            type?: string
                            fullWidth?: boolean
                        }> = [
                                { name: "name", label: "Adınız", placeholder: "Adınızı və soyadınızı daxil edin" },
                                { name: "company", label: "Şirkətin adı", placeholder: "Şirkət adını daxil edin" },
                                { name: "email", label: "Email", placeholder: "Elektron poçt ünvanınızı daxil edin" },
                                { name: "phone", label: "Mobil nömrə", placeholder: "Mobil nömrənizi daxil edin" },
                                { name: "message", label: "Metni daxil edin", placeholder: "Müraciətinizin mətnini buraya daxil edin", type: "textarea", fullWidth: true },
                            ]

                        return (
                            <>
                                <div className="flex flex-col gap-3">
                                    {fields
                                        .filter((f) => !f.fullWidth && f.type !== "textarea")
                                        .map((field) => {
                                            const fieldError = errors[field.name] as FieldError | undefined
                                            return (
                                                <div key={String(field.name)}>
                                                    <Label className="mb-1 ml-0.5">{field.label}</Label>
                                                    <Input
                                                        {...register(field.name as Path<ContactData>)}
                                                        placeholder={field.placeholder}
                                                        aria-invalid={fieldError ? "true" : "false"}
                                                    />
                                                    {fieldError?.message && (
                                                        <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                    )}
                                                </div>
                                            )
                                        })}
                                </div>

                                {/* Full width fields (textarea etc.) */}
                                {fields
                                    .filter((f) => f.fullWidth || f.type === "textarea")
                                    .map((field) => {
                                        const fieldError = errors[field.name] as FieldError | undefined
                                        if (field.type === "textarea") {
                                            return (
                                                <div key={String(field.name)}>
                                                    <Label className="mb-1 ml-0.5">{field.label}</Label>
                                                    <textarea
                                                        {...register(field.name as Path<ContactData>)}
                                                        placeholder={field.placeholder}
                                                        className="w-full min-h-[120px] rounded-md border bg-transparent px-3 py-2 text-sm"
                                                        aria-invalid={fieldError ? "true" : "false"}
                                                    />
                                                    {fieldError?.message && (
                                                        <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                    )}
                                                    <div className="text-xs text-muted-foreground text-right">{messageValue.length}/500</div>
                                                </div>
                                            )
                                        }

                                        return (
                                            <div key={String(field.name)}>
                                                <Label>{field.label}</Label>
                                                <Input
                                                    {...register(field.name as Path<ContactData>)}
                                                    placeholder={field.placeholder}
                                                    aria-invalid={fieldError ? "true" : "false"}
                                                />
                                                {fieldError?.message && (
                                                    <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                )}
                                            </div>
                                        )
                                    })}
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">Bağla</Button>
                                    </DialogClose>
                                    <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Göndərilir..." : "Müraciət et"}</Button>
                                </DialogFooter>
                            </>
                        )
                    })()}
                </form>
            </DialogContent>
        </Dialog>
    )
}
