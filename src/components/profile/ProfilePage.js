import React, { useState, useRef } from "react";
import "./ProfileCard.css";
import { Button, Container, Card } from "react-bootstrap";

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
      <Container>
        <Card style={{ width: "45rem" }}>
          <h3>
            {" "}
            Click 'Choose File' to Update Profile Picture, then "Save Profile to
            Upload{" "}
          </h3>
          <h6>Note:Pic must be less than 200mb</h6>
          <br />
          <form onSubmit={submitForm}>
            <br />
            <input onChange={updatePicture} type="file" name="picture" />
            <br />
            <br />
            <h2>Tell Us About Yourself</h2>

            <br />
            <textarea
              defaultValue={props.user.about || ""}
              ref={bioRef}
              placeholder="Enter Bio"
            />
            <br />
            <Button type="submit">Save Profile</Button>
          </form>
          {props.user.pictureLocation && (
            <Card.Img
              variant="top"
              alt=""
              src={
                "http://kwitter-api.herokuapp.com" + props.user.pictureLocation
              }
              width="200px"
            />
          )}
          {unableToUpload && <p style={{ color: "red" }}>{unableToUpload}</p>}
        </Card>
      </Container>
    </>
  );
};
