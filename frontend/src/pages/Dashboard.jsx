import { useEffect, useState } from "react";
import API from "../api/api.js";

export default function Dashboard({ setUser }) {
  const [summary, setSummary] = useState(null);

  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");

  useEffect(() => {
    API.get("/dashboard/summary")
      .then((res) => setSummary(res.data))
      .catch(() => alert("Error loading data."));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleAdd = async () => {
    try {
      await API.post("/records", {
        amount: Number(amount),
        type,
        category,
      });

      alert("Added!");

      const res = await API.get("/dashboard/summary");
      setSummary(res.data);
    } catch (err) {
      console.log(err.response?.data);
      alert("Error adding record");
    }
  };

  if (!summary) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="hero">
        <h2>Dashboard</h2>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <hr />

      <h3>Add Record</h3>

      <input
        placeholder="Amount"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={handleAdd} className="add-btn">
        Add
      </button>

      <hr />

      <p>Total Income: {summary.totalIncome}</p>
      <p>Total Expense: {summary.totalExpense}</p>
      <p>Net Balance: {summary.netBalance}</p>

      <h3>Recent Transactions</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {summary.recentTransactions.map((r) => (
            <tr key={r._id}>
              <td>{r.category}</td>
              <td>{r.type}</td>
              <td>${r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
