import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  MoneyIcon,
  ToothIcon,
  SocialMediaIcon,
  BuildingIcon,
  BiologyIcon,
  BrainIcon,
  HeartIcon,
  EuroIcon,
  GlobeIcon,
  PhoneIcon,
  HospitalIcon,
  CheckIcon,
  LockIcon,
  DocumentIcon,
  UserIcon,
  EmailIcon,
} from "@/components/Icons";

/**
 * DESIGN PHILOSOPHY: Modern Professional Research
 * - Clean, accessible layout with professional color palette
 * - Blue (#1E3A5F) for trust and rigor, Turquoise (#2EC4B6) for youth and freshness
 * - Coral (#FF6B6B) for CTAs and energy
 * - Smooth animations and responsive design
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "motivacio", "recerca", "marc", "metodologia", "participa", "etica", "investigadora", "contacte"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Inici" },
    { id: "motivacio", label: "Motivació" },
    { id: "recerca", label: "Recerca" },
    { id: "marc", label: "Marc teòric" },
    { id: "metodologia", label: "Metodologia" },
    { id: "participa", label: "Participa" },
    { id: "etica", label: "Ètica" },
    { id: "investigadora", label: "Sobre mi" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold text-blue-900"
              >
                TDR Ortodoncia
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id
                    ? "bg-teal-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex">
              <button
                onClick={() => scrollToSection("participa")}
                className="bg-[#e55d5f] hover:bg-[#d64a4c] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Participa!
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("participa")}
                className="w-full mt-2 bg-[#e55d5f] hover:bg-[#d64a4c] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Participa!
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}adolescents-brackets.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Ortodòncia i adolescència a les Terres de l'Ebre
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light">
            Com influeixen les xarxes socials, l'economia i la cultura en l'ortodòncia dels adolescents?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/NungYdppMM6jM2YK6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e55d5f] hover:bg-[#d64a4c] text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Participa a l'enquesta (adolescents)
            </a>
            <a
              href="https://forms.gle/qD9iTxrs1UcmJH538"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Enquesta per a pares i mares
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-200">
            Laia Genaró Solé | Col·legi Diocesà de la Sagrada Família, Tortosa | 2025-2026
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown size={32} className="text-white animate-bounce" />
        </div>
      </section>

      {/* MOTIVACIÓ SECTION */}
      <section id="motivacio" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Per què aquest estudi?
          </h2>

          <div className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-500">
            <p className="text-lg text-gray-700 mb-4">
              Segur que si mires al teu voltant molts adolescents duen brackets o Invisalign. Jo n'he dut, els meus germans també, i quasi tots els meus amics.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Però, realment ens posem ortodòncia només per "salut" o hi ha alguna cosa més?
            </p>
            <p className="text-lg text-gray-700">
              Aquest treball neix de la curiositat per entendre com l'ortodòncia ha passat de ser un tractament mèdic a una exigència estètica que afecta la nostra autoestima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border-t-4 border-teal-500">
              <div className="text-teal-500 mb-4"><SocialMediaIcon /></div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">L'efecte "Instagram Smile"</h3>
              <p className="text-gray-700 text-sm">Estem tot el dia a TikTok i Instagram veient somriures perfectes i blancs (molts cops amb filtres!). Això crea una pressió social per "encaixar".</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border-t-4 border-teal-500">
              <div className="text-teal-500 mb-4"><EuroIcon /></div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Cost econòmic</h3>
              <p className="text-gray-700 text-sm">Una ortodòncia costa de 3.000 a 4.000 €. A les Terres de l'Ebre, la renda familiar és un 22% inferior a la mitjana catalana. Com afecta això a la decisió de portar brackets? Existeix una bretxa econòmica?</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border-t-4 border-teal-500">
              <div className="text-teal-500 mb-4"><UserIcon /></div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">L’efecte Lamine Yamal</h3>
              <p className="text-gray-700 text-sm">Portar brackets de colors ara és un símbol de prestigi i identitat. Ha deixat de fer vergonya per convertir-se en moda.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center border-t-4 border-teal-500">
              <div className="text-teal-500 mb-4"><BrainIcon /></div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Redefinir què és estar "sa"</h3>
              <p className="text-gray-700 text-sm">La salut no és només no estar malalt. També és sentir-se bé, veure's atractiu i tindre una bona autoestima. Com encaixa l'ortodòncia en aquest concepte de salut?</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECERCA SECTION */}
      <section id="recerca" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            De què tracta la recerca?
          </h2>

          <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Pregunta central</h3>
            <p className="text-lg">
              Per què cada vegada més adolescents de les Terres de l'Ebre demanen ortodòncia, i quins factors socioeconòmics i culturals expliquen aquest fenomen?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">5 objectius</h3>
              <ol className="space-y-4">
                {[
                  "Caracteritzar el perfil socioeconòmic dels adolescents que busquen tractament",
                  "Identificar les barreres d'accés econòmiques",
                  "Analitzar l'impacte de les xarxes socials (Instagram/TikTok) en la motivació",
                  "Explorar les diferències de gènere en la percepció de l'estètica dental",
                  "Avaluar la millora de la qualitat de vida relacionada amb la salut bucal",
                ].map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{obj}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">4 Hipòtesis</h3>
              <div className="space-y-4">
                {[
                  "L'estatus econòmic alt correlaciona amb major accés a l'ortodòncia",
                  "Les noies experimenten un impacte psicosocial més gran que els nois",
                  "Les xarxes socials augmenten la motivació però generen expectatives irrealistes",
                  "El boom de clíniques ha democratitzat l'accés però manté una bretxa d'exclusió social",
                ].map((hip, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#e55d5f]">
                    <p className="text-gray-700">{hip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARC TEÒRIC SECTION */}
      <section id="marc" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
            Marc teòric
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Model biopsicosocial-cultural (BS-C)
          </p>

          <div className="mb-12">
            <img
              src={`${import.meta.env.BASE_URL}model-biopsicosocial.png`}
              alt="Model biopsicosocial de l'ortodòncia"
              className="w-full max-w-3xl mx-auto mb-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: BiologyIcon, title: "Factors biològics", desc: "Maloclusions, genètica, desenvolupament dentofacial" },
              { Icon: BrainIcon, title: "Factors psicosocials", desc: "Autoestima, ansietat, qualitat de vida bucal" },
              { Icon: EuroIcon, title: "Factors socioeconòmics", desc: "Renda familiar, educació, assegurança dental" },
              { Icon: GlobeIcon, title: "Factors culturals", desc: "Normes estètiques, referents (Lamine Yamal!)" },
              { Icon: PhoneIcon, title: "Factors digitals", desc: "Instagram, TikTok, influencers, filtres" },
              { Icon: HospitalIcon, title: "Factors ambientals", desc: "Accés a serveis, ubicació geogràfica" },
            ].map((factor, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <div className="text-teal-500 mb-4"><factor.Icon /></div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{factor.title}</h3>
                <p className="text-gray-700 text-sm">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA SECTION */}
      <section id="metodologia" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Metodologia
          </h2>

          <div className="mb-12">
            <img
              src={`${import.meta.env.BASE_URL}metodologia-mixta.png`}
              alt="Disseny mixt de la recerca (qualitatiu i quantitatiu)"
              className="w-full max-w-4xl mx-auto mb-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Fase 1: Enquestes QUANTITATIVES</h3>
              <p className="text-gray-700 mb-4"><strong>Període:</strong> Abril - Juliol 2026</p>
              <ul className="space-y-3 text-gray-700">
                <li>✓ 350-400 adolescents de 12 a 18 anys</li>
                <li>✓ Centres: Sagrada Família, Institut de l'Ebre, Ramon Berenguar IV</li>
                <li>✓ Índex ESE (estatus socioeconòmic)</li>
                <li>✓ PIDAQ-Short (impacte psicosocial)</li>
                <li>✓ Mòdul xarxes socials</li>
                <li>✓ 28-30 preguntes per adolescents (5-6 min)</li>
                <li>✓ 12 preguntes per pares (3-4 min)</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Fase 2: Entrevistes QUALITATIVES</h3>
              <p className="text-gray-700 mb-4"><strong>Període:</strong> Maig - Juliol 2026</p>
              <ul className="space-y-3 text-gray-700">
                <li>✓ 8-12 adolescents (selecció estratificada)</li>
                <li>✓ 4-6 ortodoncistes de Tortosa</li>
                <li>✓ Entrevistes semiestructurades (30-40 min)</li>
                <li>✓ Anàlisi temàtica (Braun & Clarke, 2006)</li>
                <li>✓ Presencial o online</li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      {/* BIBLIOGRAFIA SECTION */}
      <section id="referencies" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Rigor científic</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aquesta recerca es fonamenta en estudis internacionals i enquestes validades per la comunitat científica; algunes de les referències més rellevants són:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-900 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">MOTIVACIÓ FAMILIAR</p>
              <p className="text-gray-700 italic text-sm">
                Wędrychowska-Szulc, B., & Syryńska, M. (2010). Patient and parent motivation for orthodontic treatment: A questionnaire study. <strong>European Journal of Orthodontics.</strong>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-900 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">INSTAGRAM SMILE & FILTRES</p>
              <p className="text-gray-700 italic text-sm">
                Karkun, M., Singh, P., & Sharma, A. (2023). Instagram smile: The impact of social media filters on dental aesthetic expectations. <strong>European Journal of Orthodontics.</strong>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-900 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">VALIDACIÓ CIENTÍFICA (PIDAQ)</p>
              <p className="text-gray-700 italic text-sm">
                Montiel-Company, J. M., et al. (2013). Validation of the Psychosocial Impact of Dental Aesthetics Questionnaire (PIDAQ) in Spanish adolescents. <strong>Medicina Oral.</strong>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-900 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">DESIGUALTAT ECONÒMICA</p>
              <p className="text-gray-700 italic text-sm">
                Schmahl, C., Bekes, K., & Frankenberger, R. (2024). Socioeconomic factors and orthodontic treatment uptake in German adolescents. <strong>Community Dentistry & Oral Epidemiology.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPA SECTION */}
      <section id="participa" className="py-16 md:py-24 bg-gradient-to-r from-[#e55d5f] to-[#d64a4c] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            La teva veu importa
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Ajuda'm a entendre la realitat dels adolescents de les Terres de l'Ebre. Enquesta anònima i voluntària que tarda menys de 6 minuts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <a
              href="https://forms.gle/NungYdppMM6jM2YK6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="text-teal-500 mb-4"><DocumentIcon /></div>
              <h3 className="text-2xl font-bold mb-4">Enquesta per a adolescents</h3>
              <p className="text-gray-700 mb-6">28-30 preguntes · 5-6 minuts · Anònima</p>
              <div className="w-full bg-[#e55d5f] hover:bg-[#d64a4c] text-white px-6 py-3 rounded-lg font-bold transition-colors">
                RESPON L'ENQUESTA
              </div>
            </a>

            <a
              href="https://forms.gle/qD9iTxrs1UcmJH538"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="text-teal-500 mb-4"><UserIcon /></div>
              <h3 className="text-2xl font-bold mb-4">Enquesta per a pares i mares</h3>
              <p className="text-gray-700 mb-6">12 preguntes · 3-4 minuts · Anònima</p>
              <div className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                RESPON L'ENQUESTA
              </div>
            </a>
          </div>

          <div className="bg-white/20 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="text-white w-6 h-6"><LockIcon /></div>
              <p className="text-sm">
                <strong>Cap resposta pot vincular-se a la teva identitat.</strong> Les dades s'esborraran el setembre de 2027.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Vols explicar la teva experiència amb més detall?</h3>
            <p className="mb-6">Estic buscant adolescents i pares disposats a participar en una entrevista de 30-40 minuts (presencial o online).</p>
            <a
              href="mailto:laia.genaro@csagrada.com"
              className="inline-block bg-white text-red-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contacta'm per l'entrevista
            </a>
          </div>
        </div>
      </section>

      {/* ÈTICA SECTION */}
      <section id="etica" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Consideracions Ètiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "100% anònim", desc: "No es recull cap nom ni dada identificativa" },
              { title: "Compliment LOPD", desc: "Llei Orgànica 3/2018 de Protecció de Dades" },
              { title: "Consentiment digital", desc: "Doble consentiment: pares + adolescent" },
              { title: "Dades encriptades", desc: "Emmagatzemament segur i protegit" },
              { title: "Destrucció de dades", desc: "Setembre de 2027" },
              { title: "Transparència", desc: "Informació clara sobre l'ús de les dades" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500 flex flex-col items-center text-center">
                <div className="text-teal-500 mb-3"><CheckIcon /></div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGADORA SECTION */}
      <section id="investigadora" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Sobre la investigadora
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Laia Genaró Solé</h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Soc alumna de Batxillerat social al Col·legi de la Sagrada Família de Tortosa. El meu Treball de Recerca naix d’una pregunta molt senzilla que veig cada dia al meu voltant: <strong>per què quasi tots els meus amics portem ortodòncia?</strong>
              </p>
              <p>
                Com a estudiant de la modalitat social, m’interessa entendre què hi ha realment darrere d’aquesta tendència. Vull analitzar com l’ortodòncia ha deixat de ser només un tractament mèdic per convertir-se també en un element que influeix en la nostra identitat adolescent, en la manera com ens veiem i en com volem que ens vegin.
              </p>
              <p>
                Per tindre una visió completa de la realitat, aplico el <strong>model biopsicosocial-cultural</strong>, que entén la salut no només com l’absència de malaltia, sinó com el resultat de factors biològics, psicològics i socials. A més, utilitzo un <strong>disseny d’investigació mixt</strong>, combinant dades estadístiques obtingudes a través d’enquestes amb testimonis reals d’adolescents i professionals del territori.
              </p>
              <p>
                Això em permet integrar diferents punts de vista i arribar a conclusions més sòlides, amb la voluntat que els <strong>resultats puguen ser útils tant per a les famílies com per als professionals de les Terres de l’Ebre.</strong>
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p><strong>Curs 2025-2026</strong> | Col·legi Diocesà de la Sagrada Família, Tortosa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTE SECTION */}
      <section id="contacte" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Contacte
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Si tens preguntes sobre la recerca o vols participar, no dubtis a contactar-me.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700 flex items-center justify-center gap-2">
              <span className="text-teal-500 w-5 h-5"><EmailIcon /></span>
              <strong>Email:</strong>{" "}
              <a href="mailto:laia.genaro@csagrada.com" className="text-teal-500 hover:text-teal-600">
                laia.genaro@csagrada.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Centre:</strong> Col·legi Diocesà de la Sagrada Família, Tortosa
            </p>
            <p className="text-gray-700">
              <strong>Curs:</strong> 2025-2026
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-blue-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-2">Treball de Recerca</h4>
                <p className="text-blue-200">Ortodòncia i adolescència a les Terres de l'Ebre</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Centre</h4>
                <p className="text-blue-200">Col·legi Diocesà de la Sagrada Família, Tortosa</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Curs</h4>
                <p className="text-blue-200">2025-2026</p>
              </div>
            </div>
            <div className="border-t border-blue-800 pt-6 text-center text-blue-200 text-sm">
              <p>
                🔒 <strong>Avís de Privacitat:</strong> Aquesta web compleix amb la LOPD. Totes les dades recollides es tracten amb total confidencialitat.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
