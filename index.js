// code your solution here
function superbowlWin(record) {
    const foundObject = record.find(obj => obj.result === "W");
    console.log(foundObject);
    if (foundObject === undefined) {
        return undefined;
    } else {
        return foundObject.year;
    }
}