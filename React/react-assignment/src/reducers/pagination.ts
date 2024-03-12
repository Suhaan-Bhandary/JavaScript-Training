export type Pagination = {
  page: number;
  per_page: number;
};

export type PaginationAction =
  | { type: "PREVIOUS_PAGE" }
  | { type: "NEXT_PAGE"; payload: { lastPage: number } }
  | { type: "RESET_PAGE" }
  | { type: "SET_PER_PAGE"; payload: { perPage: number } };

export const paginationInitialValues: Pagination = {
  page: 1,
  per_page: 10,
};

export const paginationReducer = (
  state: Pagination,
  action: PaginationAction,
): Pagination => {
  switch (action.type) {
    case "PREVIOUS_PAGE":
      if (state.page === 1) return state;
      return { ...state, page: state.page - 1 };
    case "NEXT_PAGE":
      if (state.page === action.payload.lastPage) return state;
      return { ...state, page: state.page + 1 };
    case "RESET_PAGE":
      return { ...state, page: 1 };
    case "SET_PER_PAGE":
      return { ...state, per_page: action.payload.perPage };
    default:
      return state;
  }
};
