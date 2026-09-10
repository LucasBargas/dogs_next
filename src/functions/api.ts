export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST() {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function USER_GET() {
  return {
    url: `${API_URL}/api/user`,
  };
}

export function USER_POST() {
  return {
    url: `${API_URL}/api/user`,
  };
}

export function PHOTO_POST(formData: FormData, token: string) {
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({
  page,
  total,
  user,
}: {
  page: number;
  total: number;
  user: number;
}) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store" as const,
    },
  };
}

export function PHOTO_GET(id: number) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store" as const,
    },
  };
}

export function COMMENT_POST(id: number, body: object, token: string) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_DELETE(id: number, token: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function PASSWORD_LOST() {
  return {
    url: `${API_URL}/api/password/lost`,
  };
}

export function PASSWORD_RESET() {
  return {
    url: `${API_URL}/api/password/reset`,
  };
}

export function STATS_GET(token: string) {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
