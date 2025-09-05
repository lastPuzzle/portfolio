interface AboutSectionProps {
  section: {
    id: string;
    title: string;
    content: string;
  };
}

export default function AboutSection({ section }: AboutSectionProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-base font-bold text-gray-900 dark:text-white">
        {section.title}
      </h2>
      <p className="text-sm leading-4 whitespace-pre-line text-gray-700 dark:text-gray-300">
        {section.content}
      </p>
    </section>
  );
}
