import { ZodSchema } from "zod";

export default async function submitAction(formSchema: ZodSchema, data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    return { message: "Invalid data" }
  }
  return { message: "success" }
}