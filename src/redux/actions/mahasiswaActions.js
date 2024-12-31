export const setMahasiswaData = (data) => {
  return {
    type: 'SET_MAHASISWA_DATA',
    payload: data,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page,
  };
};

export const setAddModalOpen = (isOpen) => {
  return {
    type: 'SET_ADD_MODAL_OPEN',
    payload: isOpen,
  };
};

export const setEditModalOpen = (isOpen) => {
  return {
    type: 'SET_EDIT_MODAL_OPEN',
    payload: isOpen,
  };
};

export const setEditMahasiswa = (mahasiswa) => {
  return {
    type: 'SET_EDIT_MAHASISWA',
    payload: mahasiswa,
  };
};
