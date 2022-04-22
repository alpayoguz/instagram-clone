import {firebase, FieldValue} from "../libs/firebase"

export async function doesUsernameExist(username){
    const result = firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

    return (await result).docs.map(user=> user.data().length > 0);


}