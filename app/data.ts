export type Product = {
  id: number;
  slug: string;
  brand: string;
  title: string;
  category: string;
  imageLabel: string;
  /** Full product photo (remote CDN); shown in cards when set */
  imageUrl: string;
  price: string;
  priceValue: number;
  oldPrice?: string;
  stock: string;
  rating: number;
  specs: string[];
  badge?: string;
  description: string;
};

const IMG = {
  rtx5060Ti:
    "https://p1.akcdn.net/full/1534371313.msi-geforce-rtx-5060-ti-gaming-trio-oc-8gb-gddr7-128bit.jpg",
  odysseyG5: "https://p1.akcdn.net/full/1115255790.samsung-odyssey-g5-c34g55twwp.jpg",
  alienwareLaptop:
    "https://p1.akcdn.net/full/424553321.dell-alienware-15-r2-225061.jpg",
  appleWatchOg: "https://www.apple.com/assets-www/hu_HU/watch/og/watch_og_0c52be7e3.png",
  wooting80he:
    "https://wooting.io/_next/image?url=https%3A%2F%2Fwooting-website.ams3.cdn.digitaloceanspaces.com%2Fproducts%2Fkeyboards%2F80HE%2F80HE-front-view-main.webp&w=3840&q=75",
  samsungFridge: "https://media.currys.biz/i/currysprod/M10263088_black?$l-large$&fmt=auto",
  ps5Pro: "https://p1.akcdn.net/full/1346361580.sony-playstation-5-ps5-pro.jpg",
  hyperxCloud3: "https://p1.akcdn.net/full/1165008114.hp-hyperx-cloud-iii-727a9aa-727a8aa.jpg",
} as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "msi-rtx-5060-ti-gaming-trio-oc",
    brand: "MSI",
    title: "MSI NVIDIA GeForce RTX 5060 Ti Gaming Trio OC 8GB GDDR7 128bit videokártya",
    category: "Videokártya",
    imageLabel: "RTX 5060 Ti",
    imageUrl: IMG.rtx5060Ti,
    price: "219 990 Ft",
    priceValue: 219990,
    oldPrice: "239 990 Ft",
    stock: "Raktáron",
    rating: 4.9,
    badge: "-8%",
    specs: ["8 GB GDDR7", "128 bit sín", "DLSS 4 / Ray tracing", "OC Edition"],
    description:
      "Háromventilátoros MSI Gaming Trio videokártya modern NVIDIA RTX platformmal, erős hűtéssel és friss generációs GDDR7 memóriával.",
  },
  {
    id: 2,
    slug: "samsung-odyssey-g5-c34g55twwp",
    brand: "Samsung",
    title: "Samsung Odyssey G5 C34G55TWWP 34\" ívelt VA gaming monitor",
    category: "Monitor",
    imageLabel: "G5 34\"",
    imageUrl: IMG.odysseyG5,
    price: "129 990 Ft",
    priceValue: 129990,
    stock: "Raktáron",
    rating: 4.7,
    specs: ["3440×1440 UW-FHD", "165 Hz", "1 ms MPRT", "FreeSync Premium"],
    description:
      "Széles, ívelt Odyssey G5 gaming monitor nagy képfrissítéssel, ultrawide felbontással és játékra hangolt válaszidővel.",
  },
  {
    id: 3,
    slug: "dell-alienware-15-r2",
    brand: "Dell",
    title: "Dell Alienware 15 R2 15,6\" FHD IPS gaming laptop",
    category: "Laptop",
    imageLabel: "15 R2",
    imageUrl: IMG.alienwareLaptop,
    price: "489 990 Ft",
    priceValue: 489990,
    stock: "Raktáron",
    rating: 4.6,
    specs: ["15,6\" FHD IPS kijelző", "Gaming GPU + SSD", "RGB billentyűzet", "2 év garancia"],
    description:
      "Masszív Alienware gaming laptop erős házzal, dedikált grafikus teljesítménnyel és játékra optimalizált kijelzővel.",
  },
  {
    id: 4,
    slug: "apple-watch-series-10-42mm",
    brand: "Apple",
    title: "Apple Watch Series 10 GPS 42mm okosóra",
    category: "Okosóra",
    imageLabel: "Watch S10",
    imageUrl: IMG.appleWatchOg,
    price: "154 990 Ft",
    priceValue: 154990,
    stock: "Raktáron",
    rating: 4.8,
    specs: ["GPS", "42 mm tok", "Vízálló", "watchOS 11"],
    description:
      "Apple Watch okosóra napi aktivitáskövetéshez, értesítésekhez, edzéshez és egészségfunkciókhoz letisztult kivitelben.",
  },
  {
    id: 5,
    slug: "wooting-80he-analog-keyboard",
    brand: "Wooting",
    title: "Wooting 80HE analog / rapid trigger mechanikus billentyűzet",
    category: "Billentyűzet",
    imageLabel: "80HE",
    imageUrl: IMG.wooting80he,
    price: "94 990 Ft",
    priceValue: 94990,
    stock: "Raktáron",
    rating: 4.9,
    specs: ["Rapid trigger", "80% TKL", "Per-key RGB", "USB-C"],
    description:
      "Analóg kapcsolós, rapid trigger funkciós Wooting billentyűzet kompetitív játékhoz és finoman állítható leütési ponthoz.",
  },
  {
    id: 6,
    slug: "samsung-family-hub-hutoszekreny",
    brand: "Samsung",
    title: "Samsung Family Hub okos hűtőszekrény (4 ajtós, Family Hub kijelző)",
    category: "Háztartás",
    imageLabel: "Family Hub",
    imageUrl: IMG.samsungFridge,
    price: "1 249 990 Ft",
    priceValue: 1249990,
    stock: "Rendelésre",
    rating: 4.5,
    specs: ["Family Hub érintőkijelző", "4 ajtós", "No Frost", "Energiaosztály: magas"],
    description:
      "Nagy kapacitású Samsung Family Hub okos hűtő érintőkijelzővel, No Frost hűtéssel és modern konyhai funkciókkal.",
  },
  {
    id: 7,
    slug: "sony-playstation-5-pro",
    brand: "Sony",
    title: "Sony PlayStation 5 Pro játékkonzol",
    category: "Konzol",
    imageLabel: "PS5 Pro",
    imageUrl: IMG.ps5Pro,
    price: "219 990 Ft",
    priceValue: 219990,
    stock: "Raktáron",
    rating: 4.9,
    specs: ["4K / 120 Hz támogatás", "2 TB SSD", "DualSense melléklet", "Magyar garancia"],
    description:
      "PlayStation 5 Pro konzol nagyobb grafikus teljesítménnyel, gyors SSD-vel és DualSense kontrollerrel nappaliba vagy gamer setupba.",
  },
  {
    id: 8,
    slug: "hyperx-cloud-iii-headset",
    brand: "HyperX",
    title: "HyperX Cloud III vezetékes gaming headset (fekete)",
    category: "Periféria",
    imageLabel: "Cloud III",
    imageUrl: IMG.hyperxCloud3,
    price: "32 990 Ft",
    priceValue: 32990,
    oldPrice: "36 990 Ft",
    stock: "Raktáron",
    rating: 4.8,
    badge: "Akció",
    specs: ["53 mm meghajtók", "Levehető mikrofon", "Memóriahab párnák", "3,5 mm + USB"],
    description:
      "Kényelmes HyperX gaming headset tiszta hangzással, levehető mikrofonnal és hosszabb játékhoz is kényelmes párnázással.",
  },
];

export const saleProducts: Product[] = [
  products[0],
  products[1],
  products[4],
  products[7],
].map((p, i) => ({ ...p, id: 101 + i }));

export const topProducts: Product[] = [
  products[2],
  products[3],
  products[5],
  products[6],
].map((p, i) => ({ ...p, id: 201 + i }));

export const categories = [
  "PC Alkatrész",
  "Periféria",
  "Laptop",
  "Monitor",
  "Mobil",
  "Hálózat",
  "Konzol",
  "Akciók",
];

export const filterGroups = [
  {
    title: "Gyártó",
    options: ["MSI", "Samsung", "Dell", "Apple", "Wooting", "Sony", "HyperX"],
  },
  {
    title: "Foglalat / platform",
    options: ["AM5", "LGA1700", "PCIe 4.0", "DDR5", "M.2 NVMe"],
  },
  {
    title: "Videomemória",
    options: ["8 GB", "12 GB", "16 GB", "GDDR6", "GDDR7"],
  },
];
