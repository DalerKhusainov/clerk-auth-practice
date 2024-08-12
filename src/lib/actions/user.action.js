import User from "../models/user.model";
import { connectDb } from "../mongodb/mongoose";

export async function createOrUpdateUser(
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) {
  try {
    await connectDb();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastname: last_name,
          avatar: image_url,
          email: email_addresses[0].email_address,
          username,
        },
      },
      { new: true, upsert: true }
    );
    return user
  } catch (error) {
    console.error("Error creating or updating user: ", error);
  }
}

export async function deleteUser(id) {
    try {
        await connectDb()
        await User.findOneAndDelete({ clerkId: id })
    } catch (error) {
        console.error("Error deleting user", error)
    }
}
