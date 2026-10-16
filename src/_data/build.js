// Build timestamp, used to date pages that are copied in rather than templated,
// and a compact form of it that versions asset URLs, so a deploy is never
// served alongside a stylesheet or script still cached from the last one
module.exports = () => {
  const date = new Date().toISOString();
  return { date, version: date.replace(/\D/g, '').slice(0, 14) };
};
