import React from "react";
import Button from "./Button";

const Table = ({ data, onEdit, onDelete, currentPage, itemsPerPage }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No.</th>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">NIM</th>
            <th scope="col" className="px-6 py-3">Alamat</th>
            <th scope="col" className="px-6 py-3">Umur</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-b bg-gray-800 border-gray-700">
              <td className="px-6 py-4">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
              <td className="px-6 py-4">{item.nama}</td>
              <td className="px-6 py-4">{item.nim}</td>
              <td className="px-6 py-4">{item.alamat}</td>
              <td className="px-6 py-4">{item.umur}</td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <Button style="primary" text="Edit" onClick={() => onEdit(item)} />
                  <Button style="danger" text="Hapus" onClick={() => onDelete(item.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Table;