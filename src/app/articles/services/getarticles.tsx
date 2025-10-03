export async function getArticles() {
  try {
    const res = await fetch("http://localhost:8001/api/test/getarticle", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Gagal mengambil data artikel");
    }
    const data = await res.json();
    return data.data; // sesuai struktur di server.js {statuts, data}
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
