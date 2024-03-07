import ClassRoom from "./0-classroom.js"

export default function initializeRooms() {
	let clss = [];

	clss.push(new ClassRoom(19));
	clss.push(new ClassRoom(20));
	clss.push(new ClassRoom(34));

	return clss;
}
