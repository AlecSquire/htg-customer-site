export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">HTG MAN & VAN LTD</h3>
            <p className="text-sm opacity-90">Company number 16573954</p>
            <p className="text-sm opacity-90">Licensed Waste Carrier #CBDU600553</p>
            <p className="text-sm opacity-90">8 Castle Court, Totnes TQ9 5PD</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm mb-1">htgmanandvan@gmail.com</p>
            <p className="text-sm mb-1">07765283257</p>
            <p className="text-sm opacity-90">Open weekdays 8-5 (except bank hols)</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/Dt4KmX9jkVonhaet5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm opacity-90 space-y-2">
          <p>&copy; 2025 HTG Man & Van Ltd. All rights reserved.</p>
          <p className="text-xs">
            Website made by{" "}
            <a
              href="https://alecsquire.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-gray-300 transition-colors"
            >
              alecsquire.co.uk
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
