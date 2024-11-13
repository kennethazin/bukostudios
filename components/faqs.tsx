import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why choose us?</AccordionTrigger>
        <AccordionContent>
          We&apos;re a small team, but we celebrate and synthesise our complementary talents and perspectives. As a duo, we&apos;re
          resolute, yet kind, conceptual yet grounded. we believe that a powerful brand design starts with powerful strategy. Without a solid
          strategic foundation, we&apos;re nothing. That&apos;s why we pay close attentoin to the incidental details, always asking: <q>Does this feel right?</q>.

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How much is it for a website?</AccordionTrigger>
        <AccordionContent>
          The cost of a website can vary depending on the specific
          requirements and scope of the project. As a general guideline, our
          custom website projects typically range from €1,000 to €3,000+. For a
          basic landing page or brochure-style website, you&apos;re looking at the
          lower end of that range, around €200 to €1000. This would include a
          custom design, mobile responsiveness, and core functionality like
          contact forms. For more complex websites, such as e-commerce stores,
          product showcases, or corporate sites, the costs tend to be in the
          €2,000 to 3,000+ range. We always provide a detailed, transparent
          breakdown of costs so you know exactly what you&apos;re paying for. Our
          goal is to create a high-quality, bespoke website that
          show your brand voice and give you that positive return on investment. If you&apos;d like a
          more accurate quote for your specific project, please don&apos;t hesitate
          to reach out. We&apos;d be happy to discuss your requirements in more
          detail and provide a personalized proposal.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How long does it take?</AccordionTrigger>
        <AccordionContent>
          For simple landing pages and websites with 1-3 pages, it takes around 1-2 weeks of design, development & testing. For more advanced custom websites, it is recommended to allocate a minimum of 4 weeks.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
