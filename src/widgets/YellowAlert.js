import React from "react";
import { Container } from "@material-ui/core";

const YellowAlert = props => {

  return (    
      <Container
        style={{
          background: "#ffaaaa",
          borderRadius: ".25em",
          padding: "1em",
          color: "#550000",
          textAlign: "center",
        }}
        maxWidth="xl"
      >
        {props.message}
      </Container>
  );
};

export default YellowAlert;
