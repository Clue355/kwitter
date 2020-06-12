import React, { useState, useRef } from "react";
import "./ProfileCard.css";
import { Button } from "react-bootstrap";
// https://react-bootstrap.github.io/getting-started/introduction

export const ProfilePage = (props) => {
  // https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10
  const [picture, setPicture] = useState(null);
  // HOW DO WE GET THIS FROM REDUX!!!>!>!>!>!!!>!>!>!????
  const [unableToUpload, setunableToUpload] = useState("");
  // https://css-tricks.com/working-with-refs-in-react/
  const bioRef = useRef(null);

  const updatePicture = (event) => {
    //const selectedFile = event.target.files[0];
    // https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10
    const [selectedFile] = event.target.files;
    setPicture(selectedFile);
  };

  const submitForm = async (event) => {
    event.preventDefault(); //stop the page from refreshing
    try {
      // reset the error every time
      setunableToUpload("");

      // check if photo (ASK INSTRUCTOR HOW THIS WORKS WITH REFS)
      if (picture) {
        // upload a photo
        await props.uploadPhoto(picture);
      }
      // check CURRENT value
      if (bioRef.current.value) {
        await props.updateUser({
          about: bioRef.current.value,
        });
      }
    } catch (anErr) {
      setunableToUpload("Error getting photo");
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input onChange={updatePicture} type="file" name="picture" />
        <textarea
          defaultValue={props.user.about || ""}
          ref={bioRef}
          placeholder="Enter Bio"
        />
        <Button type="submit">Save Profile</Button>
      </form>
      {props.user.pictureLocation && (
        <img
          alt=""
          src={"http://kwitter-api.herokuapp.com" + props.user.pictureLocation}
          width="200px"
        />
      )}
      {unableToUpload && <p style={{ color: "red" }}>{unableToUpload}</p>}
    </>
  );
};
