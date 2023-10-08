import "@/app/assets/css/titles.css";
type titleProps = {
  title: string;
  description: string;
};
const TitlesComponent = ({ title, description }: titleProps) => {
  return (
    <>
      <h4 className="whoami pt-10 text-center lg:text-5xl md:text-3xl sm:text-2xl xs:text-base leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
        {title}
      </h4>
      <h6 className="description font-bold text-xl	">{description}</h6>
    </>
  );
};

export default TitlesComponent;
