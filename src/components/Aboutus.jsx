import HeadingText from "./HeadingText";

export default function Aboutus() {
  return (
    <section id="about" className="py-20 mx-auto">
      <div className="container mx-auto px-4">
        <HeadingText className="text-left mb-5">About Us</HeadingText>
        <p className="text-lg max-w-[1500px] mx-auto text-black/70">
          At BKK & Associates, we are a trusted and forward-thinking team of
          Chartered Accountants dedicated to providing comprehensive financial
          and business advisory services. Since our establishment in 2012, we
          have been helping businesses across industries achieve compliance,
          optimize performance, and unlock growth.
        </p>
        <p className="text-lg max-w-[1500px] mx-auto mt-10 text-black/70">
          Our expertise spans across various domains, including ensuring
          financial integrity through statutory and specialized audits,
          delivering robust solutions for income tax, GST, transfer pricing, and
          international taxation, assisting with company formation, mergers &
          acquisitions, IPOs, and regulatory compliance, and enhancing
          operational efficiency through financial planning, budgeting, and
          management system design.
        </p>
        <p className="text-lg max-w-[1500px] mx-auto mt-10 text-black/70">
          With a presence in Hyderabad, Bangalore, and Visakhapatnam, we are
          strategically positioned to serve a diverse clientele. Our experience
          includes collaborating with government bodies, private enterprises,
          and multinational corporations in industries such as real estate,
          manufacturing, IT, food processing, textiles, transporter companies,
          exporters, and pharmaceutical firms.
        </p>
        <p className="text-lg max-w-[1500px] mx-auto mt-10 text-black/70">
          At BKK & Associates, we are more than accountants—we are your
          strategic partners, committed to excellence and empowering your
          journey toward sustainable growth.
        </p>
      </div>
    </section>
  );
}
