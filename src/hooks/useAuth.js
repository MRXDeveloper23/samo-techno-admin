function isTokenExpired(token) {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid token");
  }
  const payload = parts[1];
  const decodedPayload = atob(payload);
  const payloadObj = JSON.parse(decodedPayload);
  const currentTime = Math.floor(Date.now() / 1000);
  return payloadObj.exp < currentTime;
}

export function useAuth() {
  const token = localStorage.getItem("crm_token");
  return !!token && !isTokenExpired(token);
  // return true;
}
