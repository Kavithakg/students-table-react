 import React, { useState } from "react";

function App() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("All fields required");
      return;
    }

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = { name, email, age };
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, { name, email, age }]);
    }

    setName("");
    setEmail("");
    setAge("");
  };

  const editStudent = (index) => {
    const student = students[index];
    setName(student.name);
    setEmail(student.email);
    setAge(student.age);
    setEditIndex(index);
  };

  const deleteStudent = (index) => {
    if (window.confirm("Are you sure to delete?")) {
      const updated = students.filter((_, i) => i !== index);
      setStudents(updated);
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h2>Students Table</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">
          {editIndex !== null ? "Update" : "Add Student"}
        </button>

      </form>

      <br />

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student, index) => (

            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>

              <td>
                <button onClick={() => editStudent(index)}>Edit</button>

                <button onClick={() => deleteStudent(index)}>
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;