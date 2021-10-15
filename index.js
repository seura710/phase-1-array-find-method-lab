function superbowlWin(array) {
    for (const obj of array) {
      if (obj.result==="W") {
        return obj.year;
      }
    }
}

superbowlWin(record);
