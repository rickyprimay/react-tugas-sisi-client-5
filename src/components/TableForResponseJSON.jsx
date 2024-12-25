import React from 'react';

const TableForResponseJSON = ({ data, currentPage }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No.</th>
            <th scope="col" className="px-6 py-3">Judul</th>
            <th scope="col" className="px-6 py-3">Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-b bg-gray-800 border-gray-700">
              <td className="px-6 py-4">{(currentPage - 1) * 10 + (index + 1)}</td>
              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableForResponseJSON;
