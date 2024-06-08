import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return <div>each blog with id {id}</div>;
};

export default page;
