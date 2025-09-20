import React, { useState } from "react";
import axios from "axios";

function Xyz() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchda = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/ft");
      console.log("Data aa gya:", res.data);
      setUsers(res.data.data); // API ka format {"data": [...]} hai
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {/* Button pe click karne se data fetch hoga */}
      <button
        onClick={fetchda}
        style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}
      >
        Load Users
      </button>

      {/* Loading message */}
      {loading && <p>Loading...</p>}

      {/* Table */}
      {users.length > 0 && (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Agar users array empty ho aur loading nahi ho */}
      {!loading && users.length === 0 && <p>No users found</p>}
    </div>
  );
}

export default Xyz;
