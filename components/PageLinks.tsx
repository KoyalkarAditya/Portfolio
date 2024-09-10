import { CustomLink } from "./CustomLink";

const PageLinks = ({ className }: { className?: string }) => {
  return (
    <nav className={`${className} font-mono`}>
      <a href="#about" className="mr-10">
        <CustomLink href="#about" title="<About/>" />
      </a>
      <a href="#skills" className="mr-10">
        <CustomLink href="#skills" title="<Skills/>" />
      </a>
      <a href="#projects" className="mr-10">
        <CustomLink href="#projects" title="<Projects/>" />
      </a>
    </nav>
  );
};

export default PageLinks;
