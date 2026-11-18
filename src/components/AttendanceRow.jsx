import "./AttendanceRow.css";

function AttendanceRow({ name, present }) {
  return (
    <li className="attendance-row">
      <span className="student-name">{name}</span>
      <span className={`status ${present ? "status-present" : "status-absent"}`}>
        {present ? "Present" : "Absent"}
      </span>
    </li>
  );
}

export default AttendanceRow;
