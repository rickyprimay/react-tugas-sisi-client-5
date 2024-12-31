const initialState = {
  mahasiswaData: [],
  currentPage: 1,
  isAddModalOpen: false,
  isEditModalOpen: false,
  editMahasiswa: null,
};

const mahasiswaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAHASISWA_DATA':
      return { ...state, mahasiswaData: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_ADD_MODAL_OPEN':
      return { ...state, isAddModalOpen: action.payload };
    case 'SET_EDIT_MODAL_OPEN':
      return { ...state, isEditModalOpen: action.payload };
    case 'SET_EDIT_MAHASISWA':
      return { ...state, editMahasiswa: action.payload };
    default:
      return state;
  }
};

export default mahasiswaReducer;
