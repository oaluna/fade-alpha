import axios from "axios";
import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import { IoLogoIonic } from "react-icons/io5";
import API from "../../API";

const Conversation = ({ conversation, currentUser, onlineUsers }) => {
  const [connectPoolr, setConnectPoolr] = useState([]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const connectPoolrId = conversation.members.find(
      (member) => member !== currentUser._id
    );

    const getConnectPoolr = async () => {
      const { data } = await API.get("user/" + connectPoolrId);
      setConnectPoolr(data);
    };
    getConnectPoolr();
    localStorage.setItem("connectPoolr", JSON.stringify(connectPoolr));
  }, [currentUser, conversation, connectPoolr]);

  useEffect(() => {
    onlineUsers.some((user) => user.userId === connectPoolr._id)
      ? setOnline(true)
      : setOnline(false);
  }, [onlineUsers, connectPoolr]);

  return (
    <>
      <div className="singlePoolr row d-flex align-items-center">
        <div className="profilePic col-3">
          <div className="converUser">
            <img
              src={
                connectPoolr.picture
                  ? connectPoolr.picture
                  : "/images/user-icon.png"
              }
              className="user-icon img-fluid"
              alt="Poolr Profile"
            />
            {online ? <IoLogoIonic className="onlineUserIcon" /> : null}
          </div>
        </div>
        <div className="Poolr col-9 d-flex flex-row justify-content-between align-items-center">
          <h5>{connectPoolr.fullName}</h5>
          <span>{format(conversation.date)}</span>
        </div>
      </div>
    </>
  );
};

export default Conversation;
