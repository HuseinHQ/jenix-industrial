export const site = {
  salesName: "Jefry Chandra",
  salesNickname: "Jefry",
  brandName: "JENIX INDUSTRIAL",
  brandTagline: "Electric Forklift Specialist",
  whatsappNumber: "6281234635677",
  whatsappDisplay: "+62 812-3463-5677",
  email: "jefry.chandra84@gmail.com",
  address:
    "Lingkungan Industri Kecil, Jl. Raya Trosobo Blok Barat No.2, Tj. Anom, Tanjungsari, Taman, Sidoarjo Regency, Jawa Timur",
  instagramUrl: "#",
  linkedinUrl: "https://www.linkedin.com/in/jefry-chandra-05a62656/",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
