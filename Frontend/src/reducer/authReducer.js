const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
    updateLoading: false,
    alert: null,
  },
  action
) => {
  switch (action.type) {
    // Auth User
    case "AUTH_START":
      return { ...state, loading: true, error: false, alert: null };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
        alert: null,
      };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true, alert: action.data };
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false };

    // Update
    case "UPDATE_USER_START":
      return { ...state, updateLoading: true, error: false };
    case "UPDATE_USER_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        updateLoading: false,
        authData: action.data,
        error: false,
      };
    case "UPDATE_USER_FAIL":
      return { ...state, updateLoading: false, error: true };
    default:
      return state;
  }
};

export default authReducer;
