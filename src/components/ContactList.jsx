import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ContactList = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <>
      <h1>
        Contact {id} {obj.hello}
      </h1>
    </>
  );
};

export default ContactList;
