import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full Name is required.",
  }),
  email: z
    .string()
    .email({
      message: "Email must be valid.",
    })
    .min(1, {
      message: "Email can't be empty.",
    }),
  address: z.string().min(1, {
    message: "Address can't be empty.",
  }),
  country: z.string().min(1, {
    message: "Country can't be empty.",
  }),
  state: z.string().min(1, {
    message: "State can't be empty.",
  }),
  city: z.string().min(1, {
    message: "City can't be empty.",
  }),
  zipCode: z.string().min(1, {
    message: "Zip Code can't be empty.",
  }),
});

export default formSchema;
