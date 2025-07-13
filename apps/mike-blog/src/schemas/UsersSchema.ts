import { z } from 'astro:content';

// import { zWebSite, zEmail } from './utils/index.ts';

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().min(0).optional(),
  role: z.enum(['admin', 'editor', 'customer', 'contributer']),
});

export type UserType = z.infer<typeof UserSchema>;

// export const UserSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   email: zEmail.optional(),
//   avatar: z.string().url().optional(),
//   bio: z.string().optional(),
//   role: z
//     .enum([
//       'Admin',
//       'Editor',
//       'Viewer',
//       'Manager',
//       'Developer',
//       'Designer',
//       'Analyst',
//     ])
//     .default('Viewer'),
//   status: z.enum(['active', 'inactive', 'pending']).default('pending'),
//   department: z.string().optional(),
//   location: z.string().optional(),
//   joinDate: z.string().datetime().optional(),
//   lastLogin: z.string().datetime().optional(),
//   permissions: z.array(z.string()).optional(),
//   preferences: z
//     .object({
//       theme: z.enum(['light', 'dark', 'auto']).default('auto'),
//       notifications: z.boolean().default(true),
//       language: z.string().default('en'),
//     })
//     .optional(),
//   links: z.array(zWebSite).optional(),
//   metadata: z.record(z.unknown()).optional(),
// });

// export const CreateUserSchema = UserSchema.omit({ id: true });

// export const UpdateUserSchema = UserSchema.partial().omit({ id: true });

// export const UserResponseSchema = UserSchema.extend({
//   createdAt: z.string().datetime(),
//   updatedAt: z.string().datetime(),
// });

// export type User = z.infer<typeof UserSchema>;
// export type CreateUser = z.infer<typeof CreateUserSchema>;
// export type UpdateUser = z.infer<typeof UpdateUserSchema>;
// export type UserResponse = z.infer<typeof UserResponseSchema>;
