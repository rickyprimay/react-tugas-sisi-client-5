// src/components/Mahasiswa.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Table from "../../components/Table";
import DeleteModal from "../../components/Modal/DeleteModal";
import AddEditModal from "../../components/Modal/AddEditModal";
import Swal from "sweetalert2";
import AdminLayout from "../../Layouts/AdminLayout";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { setMahasiswaData, setCurrentPage, setAddModalOpen, setEditModalOpen, setEditMahasiswa } from "../../redux/actions/mahasiswaActions";

const Mahasiswa = () => {
  const dispatch = useDispatch();
  const mahasiswaData = useSelector((state) => state.mahasiswa.mahasiswaData);
  const currentPage = useSelector((state) => state.mahasiswa.currentPage);
  const isAddModalOpen = useSelector((state) => state.mahasiswa.isAddModalOpen);
  const isEditModalOpen = useSelector((state) => state.mahasiswa.isEditModalOpen);
  const editMahasiswa = useSelector((state) => state.mahasiswa.editMahasiswa);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mahasiswaData.slice(indexOfFirstItem, indexOfLastItem);

  const fetchMahasiswa = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(`${BASE_URL}/api/mahasiswa`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.code === 200) {
        dispatch(setMahasiswaData(response.data.data));
      } else {
        Swal.fire("Error", "Gagal memuat data mahasiswa", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Terjadi kesalahan saat memuat data", "error");
    }
  };

  const handleEdit = (mahasiswa) => {
    dispatch(setEditMahasiswa(mahasiswa));
    dispatch(setEditModalOpen(true)); 
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Mahasiswa ini akan dihapus.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Tidak",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("authToken");
          const response = await axios.delete(`${BASE_URL}/api/mahasiswa/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.code === 200) {
            Swal.fire("Berhasil!", "Mahasiswa berhasil dihapus.", "success");
            fetchMahasiswa(); 
          } else {
            Swal.fire("Gagal", "Terjadi kesalahan saat menghapus mahasiswa.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "Terjadi kesalahan saat menghapus data.", "error");
        }
      }
    });
  };

  useEffect(() => {
    fetchMahasiswa();
  }, []);

  return (
    <AdminLayout>
      <div>
        <h1 className="font-bold text-xl text-white mb-6">Daftar Mahasiswa</h1>
        <div className="mb-4">
          <Button
            style="success"
            text="Tambah Mahasiswa"
            onClick={() => dispatch(setAddModalOpen(true))}
          />
        </div>

        <Table
          data={currentItems}
          onEdit={handleEdit} 
          onDelete={handleDelete}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />

        <AddEditModal
          isOpen={isAddModalOpen}
          onClose={() => dispatch(setAddModalOpen(false))}
          onSubmit={fetchMahasiswa}
          type="add"
        />
        <AddEditModal
          isOpen={isEditModalOpen}
          onClose={() => dispatch(setEditModalOpen(false))}
          onSubmit={fetchMahasiswa}
          type="edit"
          mahasiswa={editMahasiswa} 
        />
      </div>
    </AdminLayout>
  );
};

export default Mahasiswa;
