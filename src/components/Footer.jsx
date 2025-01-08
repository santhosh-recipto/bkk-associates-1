import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 font-medium">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/CA-India-Logo.png"
                alt="CA Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-[#175888]">
                BKK & ASSOCIATES
              </span>
            </div>
            <p className="text-sm ">Chartered Accountants</p>
            <p className="text-sm">
              Year of Establishment: 2012
              <br />
              Constitution: Partnership Firm
              <br />
              Registration No.: FRN 015384S
              <br />
              MEF No.: MEF 63953
              <br />
              RBI Unique Code: 958594
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#175888]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#175888]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#175888]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#175888]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#175888]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[#175888]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a
                  href="mailto:kiran@bkkca.com"
                  className="hover:text-[#175888] hover:underline">
                  kiran@bkkca.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a
                  href="tel:9701328888"
                  className="hover:text-[#175888] hover:underline">
                  970-132-8888
                </a>
                <span className="mx-2">/</span>
                <a
                  href="tel:8978907890"
                  className="hover:text-[#175888] hover:underline">
                  89-7890-7890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 min-w-fit" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Flat+303,+Srishti+Homes,+Beside+Metro+Pillar+A1010,+S+R+Nagar,+Hyderabad+500038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#175888] hover:underline">
                  Head Office: Flat 303, Srishti Homes, Beside Metro Pillar
                  A1010, S R Nagar, Hyderabad – 500038
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 min-w-fit" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=36,+II+Floor,+91+Springboard,+Salarpuria+Towers-I,+7th+Block,+Koramangala,+Bangalore+560095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#175888] hover:underline">
                  Branch Office: #36, II Floor, 91 Springboard, Salarpuria
                  Towers-I, 7th Block, Koramangala, Bangalore – 560095
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 min-w-fit" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Flat+A2,+Baba+Towers,+Opp.+Andhra+University+out+gate,+Visakhapatnam+530003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#175888] hover:underline">
                  Branch Office: Flat A2, Baba Towers, Opp. Andhra University
                  out gate, Visakhapatnam – 530003
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className=" font-semibold mb-4 text-[#175888]">Follow Us</h3>
            <div className="flex items-center space-x-4">
              {/* <a href="#" className=" hover:text-blue-500">
                <img src="/twitter.png" alt="Facebook" className="h-6 w-6" />
              </a> */}
              <a href="#" className="text-white hover:text-blue-500">
                <img src="/twitter.png" alt="Twitter" className="h-6 w-6 rounded" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; 2025 BKK & ASSOCIATES Chartered Accountants. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
