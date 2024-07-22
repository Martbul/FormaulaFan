import app from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const uploadFileToCloud = async (file) => {
  console.log("uploading file to firebase");
  if (!file) return;

  const storage = getStorage(app);

  const folder = "cloudStorageImages/";
  const fileName = new Date().getTime() + "_" + file.name;
  const storageRef = ref(storage, folder + fileName);

  // Create the upload task
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Upload failed:", error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error("Failed to get download URL:", error);
            reject(error);
          });
      }
    );
  });
};
