import { useNavigate } from "react-router-dom";

export default function DashboardSelectType() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">

        <div
          onClick={() => nav("/dashboard/add-human")}
          className="cursor-pointer bg-teal-600 text-white p-12 rounded-3xl shadow-xl text-center hover:scale-105 transition"
        >
          <h2 className="text-3xl font-bold">Human Products</h2>
        </div>

        <div
          onClick={() => nav("/dashboard/add-veterinary")}
          className="cursor-pointer bg-blue-600 text-white p-12 rounded-3xl shadow-xl text-center hover:scale-105 transition"
        >
          <h2 className="text-3xl font-bold">Veterinary Products</h2>
        </div>

      </div>
    </div>
  );
}