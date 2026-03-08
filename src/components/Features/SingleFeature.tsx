import { Feature } from "@/types/feature";

const SingleFeature = ({ feature, messages }: { feature: Feature; messages: any }) => {
  const { id, icon, title, paragraph } = feature;
  const t = messages.Features;

  // Dynamic localization mapping
  const localizedTitle = t[`feature${id}_title`] || title;
  const localizedParagraph = t[`feature${id}_desc`] || paragraph;

  return (
    <div className="w-full  md:max-w-[370px]">
      <div
        className="
    wow fadeInUp group relative overflow-hidden rounded-2xl 
    bg-gray-200  dark:bg-gray-900/70 
    backdrop-blur-xl 
    border border-white/20 dark:border-white/30 
    p-8 hover:bg-gray/20 dark:hover:bg-gray-700/70 
    hover:border-white/30 dark:hover:border-white/50 
    hover:-translate-y-2 transition-all duration-500
  "
        data-wow-delay=".15s"
      >

        {/* Gradient overlay for premium effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Icon with glass effect - shadow removed */}
        <div className="relative mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="relative mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white group-hover:text-primary transition-colors duration-300">
          {localizedTitle}
        </h3>

        {/* Paragraph */}
        <p className="relative text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {localizedParagraph}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default SingleFeature;
