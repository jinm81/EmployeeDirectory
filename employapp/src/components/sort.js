import React, { Component } from "react";

const [developerState, setDeveloperState] = useState(someDefaultObj);
const handleSort = heading => {
    let currentOrder = this.State.order;
    console.log(currentOrder, currentOrder);
    const compareFnc = (a, b) => {
      if (currentOrder === "ascend") {
        if (a[heading] < b[heading]) {
          return -1;
        }
        if (a[heading] > b[heading]) {
          return 1;
        }
        return 0;
      } else {
        if (a[heading] < b[heading]) {
          return 1;
        }
        if (a[heading] > b[heading]) {
          return -1;
        }
        return 0;
      }
    };
    let sortedUsersCopy = [...thisState.sortedUsers];
    sortedUsersCopy.sort(compareFnc);
    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }
    setDeveloperState({
      ...developerState,
      sortedUsers: sortedUsersCopy,
      order: currentOrder
    });
  };


  export default Main;