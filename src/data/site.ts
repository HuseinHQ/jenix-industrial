export const site = {
  salesName: "Jefry Chandra",
  salesNickname: "Jefry",
  brandName: "JENIX INDUSTRIAL",
  brandTagline: "Electric Forklift Specialist",
  whatsappNumber: "6281234635677",
  whatsappDisplay: "+62 812-3463-5677",
  email: "jefry.chandra84@gmail.com",
  address: "Jl. Industri Raya No. 88, Bekasi, Jawa Barat",
  instagramUrl: "#",
  linkedinUrl: "#",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
