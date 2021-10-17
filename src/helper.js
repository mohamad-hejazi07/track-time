/*Convert Time to readable text*/
export function convertToDateTime(timestamp) {
  return new Date(timestamp).toLocaleString();
}
/*Get S, M, H from the Time with the correct Layout */
export function convertTime(time) {
  const tempTime = new Date(time);
  return `${String("0" + tempTime.getUTCHours()).slice(-2)}:${String("0" + tempTime.getUTCMinutes()).slice(-2)}:${String(
    "0" + tempTime.getUTCSeconds()
  ).slice(-2)}`;
}

/*The Total Sum of the Wokring Time */
export function getTotalSum(list) {
  return convertTime(list.reduce((prev, curr) => prev + (curr.end - curr.start), 0));
}
