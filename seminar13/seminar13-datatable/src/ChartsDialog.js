import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function ChartsDialog({ barData, pieData, onClose }) {
  return (
    <div style={overlay}>
      <div style={dialog}>
        <h3>Grafice</h3>

        <Bar data={barData} />
        <Pie data={pieData} />

        <button onClick={onClose}>Închide</button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const dialog = {
  background: "white",
  padding: 20,
  width: 600
};
