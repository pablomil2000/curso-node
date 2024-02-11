import z from 'zod'

const movieSchema = z.object({
  title: z.string(),
  year: z.number().min(1900).max(2025),
  director: z.string(),
  duration: z.number().min(1),
  poster: z.string().url(),
  genre: z.array(z.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Romance'])),
  rate: z.number().min(1).max(10).default(5)
})

export function validateMovie (object) {
  return movieSchema.safeParse(object)
}

export function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}
