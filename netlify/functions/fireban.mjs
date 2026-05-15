export default async () => {
  const url =
    "https://maps.alberta.ca/genesis/rest/services/Fire_Control_Orders-Data/Latest/FeatureServer/0/query" +
    "?where=name+LIKE+%27%25Cardston%25%27&outFields=name,alert_type&f=json";

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "MountainVistaEstates/1.0" },
    });

    if (!res.ok) throw new Error(`Alberta API responded ${res.status}`);

    const data = await res.json();
    const features = data.features || [];
    const types = features.map((f) =>
      (f.attributes.alert_type || "").toLowerCase()
    );

    let level = "none";
    if (types.some((t) => t.includes("ban")))         level = "ban";
    else if (types.some((t) => t.includes("restriction"))) level = "restriction";
    else if (types.some((t) => t.includes("advisory")))    level = "advisory";

    return new Response(
      JSON.stringify({ level, updatedAt: new Date().toISOString() }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600", // cache 1 hour
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ level: "unknown", error: err.message }),
      {
        status: 200, // return 200 so the strip shows fallback, not a hard error
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config = { path: "/api/fireban" };
