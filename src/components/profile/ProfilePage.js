import React from "react";
import "./ProfileCard.css";

export const ProfilePage = (props) => {
  const [picture, setPicture] = React.useState(null);

  const updatePicture = (event) => {
    //const selectedFile = event.target.files[0];
    const [selectedFile] = event.target.files;
    console.log(selectedFile);
    setPicture(selectedFile);
  };

  const submitForm = (event) => {
    event.preventDefault(); //stop the page from refreshing
    console.log("Picture is", picture);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input onChange={updatePicture} type="file" name="picture" />
        <textarea>Enter Bio</textarea>
        <button type="submit">Upload Image</button>
      </form>
    </>
  );
};
