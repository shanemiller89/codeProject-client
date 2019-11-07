import React, { useState, useEffect } from "react";
import APIManager from "../../util/APIManager";
import CollaborationInviteCard from "./CollaborationInviteCard";
import YellowAlert from "../../widgets/YellowAlert";
import UserContext from "../../context/UserContext";
import { Typography } from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";


const CollaborationInvites = () => {
  return (
    <UserContext>
      {context => (
        <>
          <div style={{ display: "flex", alignItems: "center", padding: "2em" }}>
            <Mail
              style={{ color: "#ca3e47", fontSize: "9em" }}
              fontSize="large"
            />
            <Typography component="h1" variant="h1">
              Collaboration Invites
            </Typography>
          </div>
          
          {context.invites.length === 0 ? (
            <YellowAlert message="Sorry, you have no collaboration invites currently" />
          ) : (
            context.invites.map(invite => (
              <CollaborationInviteCard
                invite={invite}
                updateInvite={context.updateInvite}
              />
            ))
          )}
        </>
      )}
    </UserContext>
  );
};

export default CollaborationInvites;
