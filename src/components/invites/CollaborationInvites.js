import React, {useState, useEffect} from "react";
import APIManager from "../../util/APIManager"
import CollaborationInviteCard from "./CollaborationInviteCard";
import YellowAlert from "../../widgets/YellowAlert";

const CollaborationInvites = () => {
    const [invites, setInvites] = useState([])


    const getInvites = () => {
        APIManager.getAll("collaboratorinvites/myinvites").then(invites => {
            setInvites(invites)
        })
    }

    const updateInvite = (editedItem, id) => {
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
    {invites.length === 0 ?
    <YellowAlert message="Sorry, you have no collaboration invites currently" />
    :
    invites.map(invite => (
        <CollaborationInviteCard invite={invite} updateInvite={updateInvite}/>
    ))
    }
    </>
  );
};

export default CollaborationInvites;