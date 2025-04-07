import { z } from "zod";

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required and must be a string",
    })
    .min(3)
    .max(50),

  age: z
    .number({
      required_error: "Age is required and must be a number",
    })
    .int()
    .positive(),

  email: z
    .string({
      required_error: "Email is required and must be a string",
    })
    .email(),

  photo: z
    .string({
      required_error: "Photo is required and must be a string",
    })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
