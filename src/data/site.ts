export const site = {
  salesName: "Reza Pratama",
  brandName: "JENIX INDUSTRIAL",
  brandTagline: "Electric Forklift Specialist",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  email: "reza.pratama@jenixindustrial.com",
  address: "Jl. Industri Raya No. 88, Bekasi, Jawa Barat",
  instagramUrl: "#",
  linkedinUrl: "#",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
