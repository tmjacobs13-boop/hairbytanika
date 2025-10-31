import { Facebook, Phone, MapPin } from 'lucide-react';

function App() {
  const portfolioImages = [
    { src: '/Blonde.jpg', alt: 'Blonde hair styling' },
    { src: '/Babylights.jpg', alt: 'Babylights technique' },
    { src: '/Highlights.jpg', alt: 'Hair highlights' },
    { src: '/Highlights2.jpg', alt: 'Hair highlights style' },
    { src: '/Lived-in Blondie.jpg', alt: 'Lived-in blonde look' },
    { src: '/500435691_17879245476311689_5865572007255419143_n.jpg', alt: 'Hair styling work' },
    { src: '/502755711_17880123201311689_7000708024442070036_n.jpg', alt: 'Hair styling work' },
    { src: '/504379411_17880982710311689_343378347538498484_n.jpg', alt: 'Hair styling work' },
    { src: '/509644516_17886243147311689_7621089844654551850_n.jpg', alt: 'Hair styling work' },
    { src: '/520341403_17885896971311689_8248323580000280461_n.jpg', alt: 'Hair styling work' },
    { src: '/520724604_17886021162311689_5332056751368205167_n.jpg', alt: 'Hair styling work' },
    { src: '/526696373_17887749555311689_1945015433130546642_n.jpg', alt: 'Hair styling work' },
    { src: '/528035293_17887882569311689_3743142736118415128_n.jpg', alt: 'Hair styling work' },
    { src: '/554083141_17895060444311689_2327611183842947836_n.jpg', alt: 'Hair styling work' },
    { src: '/554224789_17894941329311689_4446408862400845826_n.jpg', alt: 'Hair styling work' },
    { src: '/554682116_17894689752311689_687274709486061560_n.jpg', alt: 'Hair styling work' },
    { src: '/554692034_17895059664311689_4340722636050897304_n.jpg', alt: 'Hair styling work' },
    { src: '/556979681_17894689743311689_8780696880621473892_n.jpg', alt: 'Hair styling work' },
    { src: '/557620148_17895059673311689_5464429200125236876_n.jpg', alt: 'Hair styling work' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <header className="py-24 px-4 md:px-8 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
                Hair by Tanika
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wide mb-6">
                Professional Hair Artist at Copper 22 Salon
              </p>
              <p className="text-lg md:text-xl font-light tracking-wide mb-8">
                57 S Meadow Dr, Mineral Wells, WV 26150
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://copper22salon.glossgenius.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-colors text-center"
                >
                  Book Appointment - Select Tanika
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61568198136524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-colors flex items-center gap-2 justify-center"
                >
                  <Facebook size={20} />
                  Follow on Facebook
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/Tanika 2.jpg"
                alt="Hair by Tanika"
                className="w-96 h-96 object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/Tanika 1.jpg"
              alt="Tanika"
              className="w-full h-auto rounded-sm shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-5xl font-light mb-8 tracking-wide">About</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              With years of experience in hair artistry, I specialize in creating beautiful,
              personalized looks that enhance your natural beauty. From vibrant colors to
              precision cuts, every service is tailored to your unique style.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              I work at Copper 22 Salon in Mineral Wells, where I believe hair is an art form,
              and every client deserves to feel confident and beautiful. Let's create something
              amazing together.
            </p>
            <div className="flex flex-col gap-3 text-neutral-700">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="flex-shrink-0" />
                <span>57 S Meadow Dr, Mineral Wells, WV 26150</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:3045884964" className="hover:text-neutral-900">(304) 588-4964</a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook size={20} className="flex-shrink-0" />
                <a
                  href="https://www.facebook.com/profile.php?id=61568198136524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900"
                >
                  Follow me on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light mb-8 tracking-wide text-center">Services & Pricing</h2>
          <p className="text-center text-lg text-neutral-600 mb-16">
            <a
              href="https://copper22salon.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-900"
            >
              View full services and book online - Select Tanika
            </a>
          </p>

          <div className="space-y-12">
            {/* Coloring Services */}
            <div>
              <h3 className="text-3xl font-light mb-6 tracking-wide border-b pb-3">Coloring Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Full Blonding Experience</h4>
                    <p className="text-neutral-600 text-sm">For the blondies. Includes foils, toning, blowout</p>
                  </div>
                  <span className="text-xl font-light ml-4">$175</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Partial Blonding</h4>
                    <p className="text-neutral-600 text-sm">Partial foil work for blonde highlights</p>
                  </div>
                  <span className="text-xl font-light ml-4">$135</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Full Custom Coloring</h4>
                    <p className="text-neutral-600 text-sm">Anything that is not majority blonde</p>
                  </div>
                  <span className="text-xl font-light ml-4">$160</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Partial Custom Color</h4>
                    <p className="text-neutral-600 text-sm">Partial color work, non-blonde</p>
                  </div>
                  <span className="text-xl font-light ml-4">$135</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">All Over Color</h4>
                    <p className="text-neutral-600 text-sm">One color all over, no foil work</p>
                  </div>
                  <span className="text-xl font-light ml-4">$130</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Root Retouch</h4>
                    <p className="text-neutral-600 text-sm">One color root retouch on up to 1.5 inch regrowth</p>
                  </div>
                  <span className="text-xl font-light ml-4">$80</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Gloss Refresh</h4>
                    <p className="text-neutral-600 text-sm">Shine and tone refresh</p>
                  </div>
                  <span className="text-xl font-light ml-4">$50</span>
                </div>
              </div>
            </div>

            {/* Cutting Services */}
            <div>
              <h3 className="text-3xl font-light mb-6 tracking-wide border-b pb-3">Cutting & Styling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Women's Dry Haircut</h4>
                    <p className="text-neutral-600 text-sm">Precision dry cut</p>
                  </div>
                  <span className="text-xl font-light ml-4">$25</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Wash, Cut, Style</h4>
                    <p className="text-neutral-600 text-sm">Full service cut with wash and styling</p>
                  </div>
                  <span className="text-xl font-light ml-4">$50</span>
                </div>
              </div>
            </div>

            {/* Hair Extensions */}
            <div>
              <h3 className="text-3xl font-light mb-6 tracking-wide border-b pb-3">Hair Extensions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">One Row Extension Re-install</h4>
                    <p className="text-neutral-600 text-sm">Reinstall existing extensions</p>
                  </div>
                  <span className="text-xl font-light ml-4">$125</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Two Row Extension Install</h4>
                    <p className="text-neutral-600 text-sm">Full two-row installation</p>
                  </div>
                  <span className="text-xl font-light ml-4">$250</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Hair Extension Consultation</h4>
                    <p className="text-neutral-600 text-sm">Complimentary consultation</p>
                  </div>
                  <span className="text-xl font-light ml-4">Free</span>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="text-3xl font-light mb-6 tracking-wide border-b pb-3">Additional Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Waxing</h4>
                    <p className="text-neutral-600 text-sm">Professional waxing services</p>
                  </div>
                  <span className="text-xl font-light ml-4">$10</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Head Spa</h4>
                    <p className="text-neutral-600 text-sm">Signature or Luxury treatment</p>
                  </div>
                  <span className="text-xl font-light ml-4">$120-$200</span>
                </div>
                <div className="flex justify-between items-start p-4 hover:bg-neutral-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium mb-1">Brazilian Blowout</h4>
                    <p className="text-neutral-600 text-sm">Smoothing treatment</p>
                  </div>
                  <span className="text-xl font-light ml-4">$200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://copper22salon.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-neutral-900 text-white text-lg font-medium tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Book Now - Select Tanika
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light mb-16 tracking-wide text-center">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((image, idx) => (
              <div key={idx} className="aspect-square overflow-hidden bg-neutral-200 hover:opacity-90 transition-opacity">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-12 tracking-wide">Book Your Appointment</h2>
          <p className="text-xl mb-8 text-neutral-300">
            Ready to transform your look? Select Tanika when booking.
          </p>
          <a
            href="https://copper22salon.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-black text-lg font-medium tracking-wide hover:bg-neutral-100 transition-colors mb-16"
          >
            Book Now - Select Tanika
          </a>

          <div className="border-t border-neutral-700 pt-12">
            <h3 className="text-2xl font-light mb-8 tracking-wide">Connect With Me</h3>
            <div className="flex flex-col gap-6 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61568198136524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-neutral-300 transition-colors"
              >
                <Facebook size={24} />
                <span>Follow on Facebook</span>
              </a>
              <a
                href="tel:3045884964"
                className="flex items-center gap-3 text-lg hover:text-neutral-300 transition-colors"
              >
                <Phone size={24} />
                <span>(304) 588-4964</span>
              </a>
              <div className="flex items-center gap-3 text-lg text-neutral-300">
                <MapPin size={24} />
                <div className="text-left">
                  <div>Copper 22 Salon</div>
                  <div>57 S Meadow Dr, Mineral Wells, WV 26150</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white text-center">
        <div className="mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=61568198136524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors"
          >
            <Facebook size={20} />
            <span>Follow on Facebook</span>
          </a>
        </div>
        <p className="text-sm tracking-wide">© 2025 Hair by Tanika. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
