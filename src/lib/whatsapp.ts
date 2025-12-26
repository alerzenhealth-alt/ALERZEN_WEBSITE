export const openWhatsApp = (message: string = "Hello Alerzen Health! I have a query.") => {
  const url = `https://wa.me/919986404073?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
