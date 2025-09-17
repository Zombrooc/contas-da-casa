export function getUrl(path) {
  const isDevelopment = process.env.NODE_ENV === "development";
  const protocol = isDevelopment ? "http://" : "https://";
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `${protocol}${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "";
  const normalizedPath =
    path && !path.startsWith("/") ? `/${path}` : path || "";
  return `${baseUrl}${normalizedPath}`;
}
