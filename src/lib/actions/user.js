import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export async function createOrUpdateUser(
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) {
    try {
        await connect()

        const user = await User.findOneAndUpdate(
            {clerkId: id}, {
                $set: {
                    firstname: first_name,
                    lastname: last_name,
                    avatar: image_url,
                    email: email_addresses[0].email,
                    username 
                }
            },
            // upsert means: if the user is not avaiable now, it will create it
            {new: true, upsert: true}
        )

        return user
    } catch (error) {
        console.error("Error creating or updating user: ", error)
    }
}

export async function deleteUser(id) {
    try {
        await connect()
        await User.findOneAndDelete({ clerkId: id })        
    } catch (error) {
        console.log("Error deleting user ", error)
    }
}
