import AdminLayout from "../../Layouts/AdminLayout";
const Dashboard = () => {
  return (
    <AdminLayout>
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Mahasiswa</h2>
              <p className="text-3xl font-bold mt-2">100</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Total Dosen</h2>
              <p className="text-3xl font-bold mt-2">10</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
              <h2 className="text-lg font-semibold">Total Mata Kuliah</h2>
              <p className="text-3xl font-bold mt-2">20</p>
            </div>
          </div>
        </div>
    </AdminLayout>
  );
}

export default Dashboard;