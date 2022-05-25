import React from "react";

const UpdatedComp = Originalcomp=>{
  class NewComp extends React.Component {
    render() {
      return <Originalcomp name="the user has"/>;
    }
  }
  return NewComp;
};
export default UpdatedComp;