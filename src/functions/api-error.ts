const apiError = (error: unknown) => {
  if (error instanceof Error) {
    return { data: null, ok: false, error: error.message };
  }

  return {
    data: null,
    ok: false,
    error: "Ocorreu um erro inesperado. Tente novamente.",
  };
};

export default apiError;
