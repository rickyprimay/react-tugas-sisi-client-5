import React, { useState } from 'react';
import Button from '../../components/Button';
import Table from '../../components/Table';
import DeleteModal from '../../components/Modal/DeleteModal';
import AddEditModal from '../../components/Modal/AddEditModal';
import Swal from 'sweetalert2';

const Mahasiswa = () => {
  const [mahasiswaData] = useState([
    { id: 1, nama: 'Ricky Primayuda Putra', nim: 'A11.2022.14486' },
    { id: 2, nama: 'Rizky Ramadhan', nim: 'A11.2022.14487' },
  ]);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "Mahasiswa Berhasil Dihapus",
      icon: "success",
      confirmButtonText: "Okay",
    });
    setDeleteModalOpen(false);
  };

  const handleAdd = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "Mahasiswa Berhasil Ditambahkan",
      icon: "success",
      confirmButtonText: "Okay",
    });
    setAddModalOpen(false);
  };

  const handleEdit = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "Mahasiswa Berhasil Diubah",
      icon: "success",
      confirmButtonText: "Okay",
    });
    setEditModalOpen(false);
  };

  return (
    <div>
      <h1 className="font-bold text-xl text-white mb-6">Daftar Mahasiswa</h1>
      <div className="mb-4">
        <Button 
          style="success" 
          text="Tambah Mahasiswa" 
          onClick={() => setAddModalOpen(true)} 
        />
      </div>
      <Table 
        data={mahasiswaData} 
        onEdit={() => setEditModalOpen(true)}
        onDelete={() => setDeleteModalOpen(true)}
      />

      <DeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />

      <AddEditModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={handleAdd}
        type="add"
      />

      <AddEditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEdit}
        type="edit"
      />
    </div>
  );
};

export default Mahasiswa;