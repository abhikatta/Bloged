import { Post, User } from "@prisma/client";

export interface PostWithUser extends Post {
  user: User;
}
