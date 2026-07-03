import Image from "next/image";
import { Header } from "@/components/Header";

const yemeksepetiUrl =
  "https://www.yemeksepeti.com/restaurant/axxl/salu-coffee-and-matcha?srsltid=AfmBOootaqSygtI69ZmYV8hpHgbthq51iP7kmXmtjT4Lkb9yQC0z_Ng9";
const instagramUrl = "https://www.instagram.com/salucoffeeco/";

const menuItems = [
  {
    label: "Coffee",
    title: "Flat White",
    copy: "Kremamsı dokuda süt, dengeli espresso ve net kahve karakteri.",
  },
  {
    label: "Matcha",
    title: "Iced Matcha Latte",
    copy: "Canlı matcha, soğuk süt ve ferah bir bitiş. Salu'nun imza hissi.",
    featured: true,
  },
  {
    label: "Cold",
    title: "Cold Brew",
    copy: "Uzun demleme, düşük asidite ve gün boyu rahat içim.",
  },
  {
    label: "Sweet",
    title: "Tiramisu",
    copy: "Yemeksepeti vitrininde öne çıkan, kahveyle iyi eşleşen tatlı mola.",
  },
];

const signatureItems = [
  ["Strawberry Matcha", "Matcha, çilek püresi ve süt. Cam şişede ferah, katmanlı sunum."],
  ["Mango Matcha", "Matcha, mango püresi ve süt. Tropik, yumuşak ve parlak tat profili."],
  ["Blueberry Matcha", "Matcha, yaban mersini püresi ve süt. Meyvemsi ve dengeli bitiş."],
  ["Hot Matcha", "Sıcak servis edilen sade matcha. Daha sakin ve kremamsı bir seçenek."],
] as const;

const highlights = [
  ["01", "Gel-al", "2013. Sk. 9/a adresinde hızlı ve keyifli cafe molası."],
  ["02", "Paket servis", "Yemeksepeti üzerinden kahve, matcha ve tatlı siparişi."],
  ["03", "Sosyal keşif", "1.592 takipçi, 150 gönderi ve güncel Salu paylaşımları."],
] as const;

const photoCards = [
  {
    src: "/salu-yemeksepeti-listing.jpg",
    title: "Cam şişede imza içecekler",
    copy: "Yemeksepeti vitrini Salu'nun şişe içeceklerini ve tiramisu sunumunu merkeze alıyor.",
    logo: false,
  },
  {
    src: "/hero-salu.png",
    title: "Coffee & matcha ritüeli",
    copy: "Kahve, matcha ve küçük tatlı eşlikçilerin aynı masada buluştuğu sıcak bir deneyim.",
    logo: false,
  },
  {
    src: "/salu-instagram-profile.jpg",
    title: "Salu sosyal kimliği",
    copy: "Instagram profilinden gelen minimal marka dili: Simplicity is the new excellence.",
    logo: true,
  },
] as const;

export default function Home() {
  return (
    <>
      <Header yemeksepetiUrl={yemeksepetiUrl} />
      <main id="top">
        <section className="hero" aria-label="Salu Coffee and Matcha">
          <Image
            className="heroImage"
            src="/hero-salu.png"
            alt="Kahve ve matcha bardaklarının yer aldığı modern cafe sahnesi"
            fill
            priority
            sizes="100vw"
          />
          <div className="heroOverlay" />
          <div className="heroContent">
            <p className="eyebrow">Coffee & Matcha Bar</p>
            <h1>Salu Coffee & Matcha</h1>
            <p className="heroCopy">
              Nitelikli kahve, cam şişede matcha seçenekleri ve güne iyi gelen tatlı
              molalar. Sade, taze ve özenli.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#photos">
                Fotoğrafları gör
              </a>
              <a className="button secondary" href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <div className="heroStrip" aria-label="Öne çıkanlar">
            <span>10:00 - 00:00</span>
            <span>Cam şişe matcha</span>
            <span>2013. Sk. 9/a</span>
          </div>
        </section>

        <section className="introSection" id="story">
          <div>
            <p className="sectionKicker">Salu ritmi</p>
            <h2>Sadelikten gelen güçlü bir cafe kimliği.</h2>
          </div>
          <p>
            Instagram bio’sundaki “Simplicity is the new excellence!” cümlesi sitenin
            dilini de belirliyor: az laf, güçlü ürün fotoğrafı, net sipariş akışı ve
            kahve-matcha odağı.
          </p>
        </section>

        <section className="photoSection" id="photos">
          <div className="sectionHeading compactHeading">
            <p className="sectionKicker">Fotoğraf hikayesi</p>
            <h2>Ürünü gösteren, siparişe yaklaştıran görseller.</h2>
          </div>
          <div className="photoGrid">
            <article className="photoFeature">
              <Image
                src="/salu-yemeksepeti-listing.jpg"
                alt="Salu cam şişe içecekleri ve tiramisu"
                fill
                sizes="(max-width: 860px) 100vw, 58vw"
              />
              <div>
                <span>Yemeksepeti vitrini</span>
                <strong>Şişe içecekler ve tiramisu</strong>
              </div>
            </article>
            <div className="photoStack">
              {photoCards.slice(1).map((card) => (
                <article className={card.logo ? "photoCard logoCard" : "photoCard"} key={card.title}>
                  <Image src={card.src} alt={card.title} fill sizes="(max-width: 860px) 100vw, 32vw" />
                  <div>
                    <strong>{card.title}</strong>
                    <p>{card.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signatureSection">
          <div className="signatureMedia">
            <Image
              src="/salu-yemeksepeti-listing.jpg"
              alt="Salu markalı cam şişe içecekler"
              fill
              sizes="(max-width: 860px) 100vw, 46vw"
            />
          </div>
          <div className="signatureContent">
            <p className="sectionKicker">İmza matcha</p>
            <h2>Cam şişede meyveli matcha serisi.</h2>
            <div className="signatureList">
              {signatureItems.map(([title, copy]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="menuSection" id="menu">
          <div className="sectionHeading">
            <p className="sectionKicker">Menüden seçmeler</p>
            <h2>Kahve, matcha ve tatlı eşlikçiler</h2>
          </div>
          <div className="menuGrid">
            {menuItems.map((item) => (
              <article className={item.featured ? "menuItem featured" : "menuItem"} key={item.title}>
                <span className="itemTag">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="socialProof">
          <div className="profileBadge">
            <Image src="/salu-instagram-profile.jpg" alt="Salu Coffee Instagram profil görseli" width={88} height={88} />
            <div>
              <strong>@salucoffeeco</strong>
              <p>1.592 takipçi · 150 gönderi · 10:00-00:00</p>
            </div>
          </div>
          <blockquote>
            “Matchaları içtiğim en iyisi, kahve de çok güzel ve cam şişede yolluyorlar.”
          </blockquote>
        </section>

        <section className="splitSection">
          <div className="darkPanel">
            <p className="sectionKicker">Detay</p>
            <h2>Her bardakta temiz tat profili.</h2>
            <p>
              Sunum sade, malzeme seçimi güçlü, tatlar dengeli. Salu&apos;nun sitesi de
              aynı dili taşıyor: hızlı, şık ve siparişe yönlendiren.
            </p>
          </div>
          <div className="servicePanel" aria-label="Servis bilgileri">
            {highlights.map(([number, title, copy]) => (
              <div key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="orderSection" id="order">
          <div>
            <p className="sectionKicker">Sipariş</p>
            <h2>Bugünkü Salu molanı seç.</h2>
            <p>
              Menü, paket sipariş ve güncel fotoğraflar için hızlı bağlantıları kullan.
            </p>
          </div>
          <div className="orderActions">
            <a className="button primary" href={yemeksepetiUrl} target="_blank" rel="noreferrer">
              Yemeksepeti&apos;nde aç
            </a>
            <a className="button outline" href={instagramUrl} target="_blank" rel="noreferrer">
              @salucoffeeco
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Salu Coffee & Matcha</span>
        <span>Specialty coffee, matcha and fresh cafe bites.</span>
      </footer>
    </>
  );
}