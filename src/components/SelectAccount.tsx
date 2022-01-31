import React from "react";
import { useState, useEffect, CSSProperties } from "react";

// initialise user in state ok
// setUser with select/option ok
// recover figma.fileKey as propos ok
// post figma object to server with button and fetch or XMLHttpRequest

export const SelectAccount = () => {
  const [daisyUser, setDaisyUser] = useState("test");
  const [figmaUser, setFigmaUser] = useState(undefined);
  const [fileKey, setFileKey] = useState("");

  useEffect(() => {
    parent.postMessage({ pluginMessage: "export-file-info" }, "*");
    onmessage = (event) => {
      let figmaFileKey = event.data.pluginMessage.fileKey;
      let figmaUser = event.data.pluginMessage.user;
      //   let components = figmaPage.filter((n) => n.type == "COMPONENT_SET");
      //   console.log(`components ${components}`);
      setFileKey(figmaFileKey);
      setFigmaUser(figmaUser);
    };
  }, []);

  const handleSubmit = () => {
    console.log(
      `daisy user ${daisyUser} fileKey: ${fileKey} figma user ${figmaUser.id}`
    );
    // let request = new XMLHttpRequest();
    // // This link has random lorem ipsum text
    // request.open(
    //   "POST",
    //   "https://cors-anywhere.herokuapp.com/http://localhost:3000"
    // );
    // request.responseType = "text";
    // request.send(JSON.stringify({ daisyUser: daisyUser, filekey: fileKey }));

    const requestOptions = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        secret: "pf5mMh8d-hXeBQUT2-Bb36ucvB-xUgp57Yu",
        "file-id": fileKey,
        user: daisyUser,
      },
    };
    fetch("https://51.159.70.28:3000/components/genlib", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  // const containerStyle: CSSProperties = {
  //   display: "flex",
  //   justifyContent: "center",
  //   flexFlow: "column wrap",
  // };

  const selectStyle: CSSProperties = {
    background: "white",
    border: "1px solid #3649F5",
    boxSizing: "border-box",
    borderRadius: "4px",
    position: "absolute",
    height: "40px",
    width: "339px",
    left: "68px",
    top: "92px",
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "#3649F5",
    color: "white",
    boxShadow: "1px 1px 4px rgba(54, 73, 245, 0.8)",
    borderRadius: "border-radius: 4px",
    position: "absolute",
    display: "block",
    height: "40px",
    width: "339px",
    left: "68px",
    top: "143",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    textTransform: "uppercase",
    letterSpacing: "0.75px",
  };

  return (
    <div>
      <div>
        <button style={buttonStyle} onClick={handleSubmit}>
          update
        </button>
        <select
          style={selectStyle}
          name="select"
          id="select"
          onChange={(e) => {
            setDaisyUser(e.target.value);
          }}
        >
          Choose a user
          <option value="test">demo</option>
          <option value="qual">qual</option>
          <option value="adrien">Adrien</option>
          <option value="andres">Andres</option>
        </select>
      </div>
    </div>
  );
};
