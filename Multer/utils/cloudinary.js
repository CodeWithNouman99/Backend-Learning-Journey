import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: nouman,
  api_key: "1121223",
  api_secret: "wbdudidbwjdc ",
});

const uploadonCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
      // Upload file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });

      //yaha tak file upload ho gae he
      
      console.log("File is upload on cloudinary", response.url)
      return response;
    }
  } catch (error) {
    fs.unlinkSync(localFilePath)            // remove the locally saved temporaray file as the upload operation got failed
    return null
  }
};


export default uploadonCloudinary