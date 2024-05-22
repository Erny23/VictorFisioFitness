export default function DecodeJWT(token: string) {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT token");
    }
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    return { header, payload };
}

