function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  const students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const createRoom = createClassRoom(10);
