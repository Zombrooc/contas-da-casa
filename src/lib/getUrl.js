export function getUrl(path) {
  const isDevelopment = process.env.VERCEL_ENV === "development";
  const protocol = isDevelopment ? "http://" : "https://";
  const baseUrl = process.env.VERCEL_URL
    ? `${protocol}${process.env.VERCEL_URL}`
    : "";
  const normalizedPath =
    path && !path.startsWith("/") ? `/${path}` : path || "";
  return `${baseUrl}${normalizedPath}`;
}
