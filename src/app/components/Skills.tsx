import Image from "next/image";
import "@/app/assets/css/SkillsShowCase.css";

const SkillsShowCase = () => {
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-8xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden logo-container">
              <ul
                x-ref="logos"
                className="flex items-center justify-center md:justify-start logo-list"
              >
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                    alt="Facebook"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                    alt="Disney"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                    alt="Airbnb"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                    alt="Apple"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg"
                    alt="Spark"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                    alt="Samsung"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                    alt="Quora"
                    width={80}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg"
                    alt="Sass"
                    width={80}
                    height={100}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillsShowCase;
