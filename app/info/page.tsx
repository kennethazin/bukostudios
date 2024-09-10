import Ellipse from "@/components/Ellipse";

export default function Info() {
  return (
    <section className="space-y-7 min-h-screen">
      <h1 className="text-right mb-20">Work with us</h1>
      <h2>
        We are a boutique studio crafting end-to-end digital brand experiences
        by combining design and development to create your website & brand
        identity.
      </h2>
      <div>
        <h3 className="my-20">Our services</h3>

        <div className="flex flex-col sm:flex-row justify-between">
          <h4 className="font-light">The digital experience</h4>
          <div className="text-left sm:text-right indent-16 sm:indent-0">
            <p>Website design + dev</p>
            <p>Landing pages</p>
            <p>Product websites</p>
            <p>Corporate websites</p>
            <p>E-commerce websites</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row  justify-between mt-28">
          <h4 className="font-light">Branding + identity</h4>
          <div className="text-left sm:text-right indent-16 sm:indent-0">
            <p>Brand/visual identity</p>
            <p>Brand strategy</p>
            <p>Creative direction</p>
            <p>Research + moodboards</p>
            <p>Brand guidelines</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-28">
          <h4 className="font-light">SEO Services</h4>
          <div className="text-left sm:text-right indent-16 sm:indent-0">
            <p>On-page SEO</p>
            <p>Keyword Research</p>
            <p>SEO Audits</p>
            <p>Page speed</p>
            <p>Mobile optimisation</p>
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <h1 className="text-left mt-48">Interested with working with us?</h1>
          <h3 className="text-left ">
            We will evaluate the project scope and share a detailed proposal
            after our first consultation call.
          </h3>
        </div>
        <div className="mt-10">
          <Ellipse href="/inquiry" text={"[go to inquiry form]"} />
        </div>
      </div>
    </section>
  );
}
