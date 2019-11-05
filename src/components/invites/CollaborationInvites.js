import React, { useState, useEffect } from "react";
import APIManager from "../../util/APIManager";
import CollaborationInviteCard from "./CollaborationInviteCard";
import YellowAlert from "../../widgets/YellowAlert";
import UserContext from "../../context/UserContext";

const CollaborationInvites = () => {


  return (
    <UserContext>
      {context => (
        <>
          <h1>Collaboration Invites</h1>
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
