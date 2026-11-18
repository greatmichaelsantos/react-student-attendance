import AttendanceRow from "./components/AttendanceRow.jsx";
{/* binabasa nyo po ba to sir hahahaha */}
const students = [
  { id: 1, name: "Great Michael G. Santos", present: true },
  { id: 2, name: "Alan Jr. P Ecalnir", present: true },
  { id: 3, name: "Adrian N. Raymundo", present: false },
  { id: 4, name: "Rylan R. Bernardino", present: true },
  { id: 5, name: "John Melchor A. Brillante", present: true },
  { id: 6, name: "Rholly Jr. N. Cao", present: false },
]

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

function App() {
  const presentCount = students.filter((student) => student.present).length;
  const absentCount = students.filter((student) => !student.present).length;

  return (
    <main className="container">
      <header className="header">
        <h1>Student Attendance</h1>
        <p className="subtitle">{today}</p>
      </header>

      <p className="summary">
        Present: {presentCount} | Absent: {absentCount} | Total:{" "}
        {students.length}
      </p>

      <ul className="attendance-list">
        {students.map((student) => (
          <AttendanceRow
            key={student.id}
            name={student.name}
            present={student.present}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
