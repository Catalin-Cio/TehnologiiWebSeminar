import { useState } from "react";
import ChartsDialog from "./ChartsDialog";

export default function App() {
  const [open, setOpen] = useState(false);

  const barData = {
    labels: ["Java", "C#", "JavaScript"],
    datasets: [
      {
        label: "Studenți",
        data: [30, 20, 40],
        backgroundColor: ["blue", "green", "orange"]
      }
    ]
  };

  const pieData = {
    labels: ["Promovați", "Restanțieri"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["green", "red"]
      }
    ]
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Statistici</h2>

      <button onClick={() => setOpen(true)}>
        Afișează grafice
      </button>

      {open && (
        <ChartsDialog
          barData={barData}
          pieData={pieData}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
