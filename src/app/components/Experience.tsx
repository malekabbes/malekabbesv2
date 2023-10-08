"use client";
import { motion, stagger, animate } from "framer-motion";
import { useEffect } from "react";
import TitlesComponent from "./Titles";
import "@/app/assets/css/experience.css";
import TechSvg from "./TechSvg";
const ExperienceComponent = () => {
  // useEffect(() => {
  //   animate(".element", { x: 100 }, { delay: stagger(0.5) });
  // }, []);
  return (
    <>
      <TitlesComponent title="Parcour professionnel" description="" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative font-inter antialiased"
      >
        <main className="relative flex flex-col justify-center overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
              <div className="w-full max-w-3xl mx-auto">
                <div className="-my-6">
                  <div className="element relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      BearStudio
                    </div>
                    <div className="flex flex-row sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-sky-50 bg-sky-900 rounded-full">
                        Juin , 2023
                      </time>
                      <div className="text-xl font-bold text-slate-900">
                        Tunisie, Tunis
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Experience */}
                      <div className=" text-slate-500">
                        Une expérience pratique avec le starter framework
                        StartUI, développé avec{" "}
                        <span className="language font-bold">#Next.js</span>,{" "}
                        <span className="language font-bold">#JHipster</span> et{" "}
                        <span className="language font-bold">#Firebase</span>.
                        <p>
                          ✨Collaborer avec une équipe diversifiée et
                          compétente, en apprenant des professionnels
                          expérimentés du domaine.
                        </p>
                        <p>
                          ✨Participer à l'ensemble du cycle de développement
                          web, de la planification et de la conception à la mise
                          en œuvre et au déploiement.
                        </p>{" "}
                        <p>
                          ✨Acquérir une compréhension approfondie des
                          meilleures pratiques en développement web, notamment
                          en termes de scalabilité, d'optimisation des
                          performances et de design adaptatif , aussi le côté
                          UX.{" "}
                        </p>{" "}
                        <p>
                          ✨Travailler sur de vrais projets pour clients aussi
                          que des projets internes avec une équipe talentueuse
                          de développeurs et de designers.
                        </p>
                      </div>
                      {/* Skills gained */}
                      <div className="pl-4">
                        <TechSvg name="typescript" />
                        <TechSvg name="nextjs" />
                        <TechSvg name="firebase" />
                        <TechSvg name="jhipster" />
                        <TechSvg name="zod" />
                      </div>
                    </div>
                  </div>

                  <div className="element relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      TuniAOS
                    </div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-sky-50 bg-sky-900 rounded-full">
                        {" "}
                        Juin, 2022
                      </time>
                      <div className="text-xl font-bold text-slate-900">
                        Tunisie , Ariena
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Experience */}
                      <div className=" text-slate-500">
                        Une nouvelle expérience avec le fameux framework VueJS .
                        <p>
                          ✨Une plateforme qui permet de gérer les chauffeur et
                          les vehicules pour un utilisateur aussi qu'un suivi
                          des vehicules par GPS sur une cartographie
                          synchronisée en temps réel.
                        </p>
                      </div>
                      {/* Skills gained */}
                      <div className="pl-4">
                        <TechSvg name="vuejs" />
                        <TechSvg name="express" />
                        <TechSvg name="mongodb" />
                      </div>
                    </div>
                  </div>

                  <div className="element relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      TuniAOS
                    </div>
                    <div className="flex flex-row sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-sky-50 bg-sky-900 rounded-full">
                        Janv , 2021
                      </time>
                      <div className="text-xl font-bold text-slate-900">
                        Tunisie, Ariena
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Experience */}
                      <div className=" text-slate-500">
                        Développement d’une plateforme de digitalisation des
                        services médicaux:{" "}
                        <p>
                          ✨Amélioration de gestion des employés, des patients ,
                          stock matériel , et les rendez vous .
                        </p>
                        <p>
                          ✨Informatiser et automatiser les documents médicales.
                        </p>{" "}
                        <p>
                          ✨Acquérir une compréhension approfondie des
                          meilleures pratiques en développement web, notamment
                          en termes de scalabilité, d'optimisation des
                          performances et de design adaptatif , aussi le côté
                          UX.{" "}
                        </p>{" "}
                      </div>
                      {/* Skills gained */}
                      <div className="pl-4">
                        <TechSvg name="vuejs" />
                        <TechSvg name="express" />
                        <TechSvg name="mongodb" />
                      </div>
                    </div>
                  </div>

                  <div className="element relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                      Office national de télédiffusion (ONT)
                    </div>
                    <div className="flex flex-row sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-sky-50 bg-sky-900 rounded-full">
                        Sept , 2020
                      </time>
                      <div className="text-xl font-bold text-slate-900">
                        Tunisie, Tunis
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Experience */}
                      <div className="text-slate-500">
                        Développement d'une plateforme Intranet de suivi des
                        salariés et traitement des demandes internes :
                        <p>✨Amélioration de la gestion des employés.</p>
                        <p>✨Limiter la paperasse.</p>
                        <p>
                          ✨Mettre en place un système de pointage des employés
                          pour calculer les heures de travail et les absences et
                          tout.
                        </p>{" "}
                        <p
                          style={{
                            visibility: "hidden",
                            display: "block" /* or display: block; */,
                          }}
                        >
                          ✨Mettre en place un système de pointage des employés
                          pour calculer les heures de travail et les absences et
                          tout calculer les heures de travail et les absences et
                          tou .
                        </p>{" "}
                      </div>
                      {/* Skills gained */}
                      <div className="	 pl-4">
                        <TechSvg name="php" />
                        <TechSvg name="mysql" />
                        <TechSvg name="jquery" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="w-full max-w-3xl mx-auto">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                        />
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          Order Placed
                        </div>
                        <time className="font-caveat font-medium text-indigo-500">
                          08/06/2023
                        </time>
                      </div>
                      <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra aliquam
                        vestibulum morbi blandit cursus risus.
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                        />
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          Order Shipped
                        </div>
                        <time className="font-caveat font-medium text-indigo-500">
                          09/06/2023
                        </time>
                      </div>
                      <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra aliquam
                        vestibulum morbi blandit cursus risus.
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                        />
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          In Transit
                        </div>
                        <time className="font-caveat font-medium text-indigo-500">
                          10/06/2023
                        </time>
                      </div>
                      <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra aliquam
                        vestibulum morbi blandit cursus risus.
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                        />
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          Out of Delivery
                        </div>
                        <time className="font-caveat font-medium text-indigo-500">
                          12/06/2023
                        </time>
                      </div>
                      <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra aliquam
                        vestibulum morbi blandit cursus risus.
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                      >
                        <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          Delivered
                        </div>
                        <time className="font-caveat font-medium text-amber-500">
                          Exp. 12/08/2023
                        </time>
                      </div>
                      <div className="text-slate-500">
                        Pretium lectus quam id leo. Urna et pharetra aliquam
                        vestibulum morbi blandit cursus risus.
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default ExperienceComponent;
