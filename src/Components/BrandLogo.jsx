import React from "react";
// import image1 from "../../Partners/claro.png"
import image1 from"../assets/Partners/claro.png";
import image2 from"../assets/Partners/bakcell.png";
import image3 from"../assets/Partners/digicel.png";
import image4 from"../assets/Partners/grameenphone.png";
import image5 from"../assets/Partners/movistar.png";
import image6 from"../assets/Partners/mtn.png";
import image7 from "../assets/Partners/olp.png";
import image8 from"../assets/Partners/proximus.png";
import image9 from"../assets/Partners/telstra.png";
import image10 from"../assets/Partners/tigo.png";
import image11 from"../assets/Partners/TIMB_BIG.png";
import image12 from"../assets/Partners/unitel.png";
import image13 from"../assets/Partners/velcom.png";
import image14 from"../assets/Partners/vivo.png";

export default function BrandLogoScroller() {
   const logos = [
    {
      id: 1,
      name: "Brand 1",
      url: image1,
    },
    {
      id: 2,
      name: "Brand 2",
      url: image2,
    },
    {
      id: 3,
      name: "Brand 3",
      url: image3,
    },
    {
      id: 4,
      name: "Brand 4",
      url: image4,
    },
    { id: 5, 
      name: "Brand 5",
       url: image5 ,
      },
       { id: 6, 
      name: "Brand 6",
       url: image6 ,
      },
       { id: 7, 
      name: "Brand 7",
       url: image7 ,
      },
       { id: 8, 
      name: "Brand 8",
       url: image8,
      },
       { id: 9, 
      name: "Brand 9",
       url: image9 ,
      },
       { id: 10, 
      name: "Brand 10",
       url: image10,
      },
       { id: 11, 
      name: "Brand 11",
       url: image11 ,
      },
       { id: 12, 
      name: "Brand 12",
       url: image12 ,
      },
       { id: 13, 
      name: "Brand 13",
       url: image13 ,
      },
       { id: 14, 
      name: "Brand 14",
       url: image14 ,
      },
  ];


  return (
    <div className="min-h-screen bg-[var(--bg-dark)] flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 border border-[var(--accent-purple)] rounded-full text-[var(--accent-pink)] text-sm font-semibold backdrop-blur-sm">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent">
            Our Brand Partners
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Collaborating with world-class companies to deliver exceptional
            results
          </p>
        </div>

        {/* Scrolling Logo Section */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none"></div>

          {/* Main Container */}
          <div className="relative overflow-hidden rounded-3xl border border-[var(--accent-purple)/20] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-purple)/5] to-[var(--accent-pink)/5] backdrop-blur-3xl"></div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--accent-purple)/20] to-[var(--accent-pink)/20] opacity-50 blur-xl animate-pulse"></div>
            <div className="relative bg-[var(--bg-dark)/40] backdrop-blur-xl p-12">
              <div className="flex animate-scroll gap-16 items-center">
                {logos.map((logo) => (
                  <div
                    key={`first-${logo.id}`}
                    className="flex-shrink-0 flex items-center justify-center h-24 w-48 group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="relative max-h-full max-w-full object-contain group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                  </div>
                ))}
                {logos.map((logo) => (
                  <div
                    key={`second-${logo.id}`}
                    className="flex-shrink-0 flex items-center justify-center h-24 w-48 group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="relative max-h-full max-w-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div className="p-6 bg-gradient-to-br from-[var(--accent-purple)/10] to-transparent rounded-2xl border border-[var(--accent-purple)/20] backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-[var(--text-muted)]">Partner Brands</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[var(--accent-pink)/10] to-transparent rounded-2xl border border-[var(--accent-pink)/20] backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-purple)] bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-[var(--text-muted)]">Years Experience</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[var(--accent-purple)/10] to-transparent rounded-2xl border border-[var(--accent-purple)/20] backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-[var(--text-muted)]">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
