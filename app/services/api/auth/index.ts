import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../../../../firebase";
import { type User } from "@/types";

export const sigIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
        console.log("user", user);
        // localStorage.setItem("user_uid", user.uid);
        // // @ts-ignore
        // localStorage.setItem("business_type", user.displayName);
        // // Get user info from database

        // db.collection(
        //   user.displayName === "1"
        //     ? USER_TYPES.CLINICS
        //     : USER_TYPES.VETERINARIES
        // )
        //   .doc(user.uid)
        //   .get()
        //   .then((response: any) => {
        //     resolve(response?.data());
        //   })
        //   .catch((error: any) => {
        //     console.log(error);
        //     reject(error);
        //   });
      })
      .catch((error) => reject(error));
  });
};

interface CreateAccountProps {
  email: string;
  password: any;
  name: string;
  speciality: string;
}

export const createAccount = ({
  email,
  password,
  name,
  speciality,
}: CreateAccountProps) => {
  return new Promise((resolve, reject) => {
    // Create an account
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log("user", user);
        const userInfo: User = {
          created_at: new window.Date(),
          uid: user.uid,
          name,
          email,
          speciality,
        };
        // Save the information
        db.collection("doctors")
          .doc(`${user.uid}`)
          .set(userInfo)
          .then(() => {
            localStorage.setItem("user_uid", user.uid);
            localStorage.setItem("speciality", speciality);
            resolve(userInfo);
          })
          .catch((error) => reject(error));
        // auth.currentUser
        //   ?.updateProfile({
        //     displayName: business_type,
        //   })
        //   .then(() => {
        //     const userInfo: User = {
        //       created_at: new window.Date(),
        //       uid: user.uid,
        //       name,
        //       email,
        //       speciality,
        //     };
        //   })
        //   .catch((error) => console.log("error updating information"));
      })
      .catch((error) => reject(error));
  });
};
