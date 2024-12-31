import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import Swal from 'sweetalert2';

const AddEditModal = ({ isOpen, onClose, onSubmit, type = 'add', mahasiswa = {} }) => {
  if (!isOpen) return null;

  const [nama, setNama] = useState(mahasiswa.nama || '');
  const [nim, setNim] = useState(mahasiswa.nim || '');
  const [alamat, setAlamat] = useState(mahasiswa.alamat || '');
  const [umur, setUmur] = useState(mahasiswa.umur || '');
  const [progdiId, setProgdiId] = useState(mahasiswa.progdi_id || '');

  const handleSubmit = async () => {
    const data = {
      progdi_id: progdiId,
      nim: nim,
      nama: nama,
      alamat: alamat,
      umur: umur,
    };

    try {
      const token = localStorage.getItem('authToken');
      let response;

      if (type === 'add') {
        response = await axios.post(`${BASE_URL}/api/mahasiswa`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else if (type === 'edit') {
        response = await axios.put(`${BASE_URL}/api/mahasiswa/${mahasiswa.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      Swal.fire('Success', `Mahasiswa berhasil ${type === 'add' ? 'ditambahkan' : 'diubah'}`, 'success');
      onSubmit();
      onClose();
    } catch (error) {
      console.error(error.response?.data);
      Swal.fire('Error', 'Terjadi kesalahan saat menghubungi server', 'error');
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-white">
              {type === 'add' ? 'Tambah Mahasiswa' : 'Edit Mahasiswa'}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 111.414 1.414L11.414 9l4.293 4.293a1 1 0 11-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 9 4.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div className="mb-4">
              <label htmlFor="nama" className="block text-sm font-medium text-white">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full p-2 mt-1 text-sm text-white bg-gray-800 rounded border border-gray-700"
                placeholder="Masukkan Nama"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="nim" className="block text-sm font-medium text-white">
                NIM
              </label>
              <input
                type="text"
                id="nim"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                className="w-full p-2 mt-1 text-sm text-white bg-gray-800 rounded border border-gray-700"
                placeholder="Masukkan NIM"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="alamat" className="block text-sm font-medium text-white">
                Alamat
              </label>
              <textarea
                id="alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="w-full p-2 mt-1 text-sm text-white bg-gray-800 rounded border border-gray-700"
                placeholder="Masukkan Alamat"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="umur" className="block text-sm font-medium text-white">
                Umur
              </label>
              <input
                type="number"
                id="umur"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                className="w-full p-2 mt-1 text-sm text-white bg-gray-800 rounded border border-gray-700"
                placeholder="Masukkan Umur"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {type === 'add' ? 'Tambah' : 'Simpan Perubahan'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddEditModal;
