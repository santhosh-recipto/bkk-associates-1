export default function HeadingText({ children, className = "text-center mb-10" }) {
  return <div className={`text-4xl uppercase ${className} `}>{children}</div>;
}
