import React from 'react';

const AddEditModal = ({ isOpen, onClose, onSubmit, type = 'add' }) => {
  if (!isOpen) return null;

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
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              onClick={onClose}
            >
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-white">Nama</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="Nama Mahasiswa"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="nim" className="block mb-2 text-sm font-medium text-white">NIM</label>
                <input
                  type="text"
                  name="nim"
                  id="nim"
                  className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="A11....."
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-white">Jurusan</label>
                <select
                  id="jurusan"
                  className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                >
                  <option value="">Pilih Jurusan</option>
                  <option value="TI">Teknik Informatika</option>
                  <option value="SI">Sistem Informasi</option>
                  <option value="MI">Manajemen Informatika</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              onClick={onSubmit}
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