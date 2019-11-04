import React, {useState, useEffect} from "react";
import APIManager from "../../util/APIManager"
import CollaborationInviteCard from "./CollaborationInviteCard";

const CollaborationInvites = () => {
    const [invites, setInvites] = useState([])


    const getInvites = () => {
        APIManager.getAll("collaboratorinvites/myinvites").then(invites => {
            setInvites(invites)
        })
    }

    const acceptInvite = (editedItem, id) => {
      APIManager.put(`collaboratorinvites/${id}`, editedItem).then(() => {
          getInvites()
      })
  }
    
    useEffect(() => {
        getInvites();
      }, []);

    console.log(invites)

  return (
    <>
    <h1>Collaboration Invites</h1>
    {invites.map(invite => (
        <CollaborationInviteCard invite={invite} acceptInvite={acceptInvite}/>
    ))}

    </>
  );
};

export default CollaborationInvites;