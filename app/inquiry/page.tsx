import Form from "@/components/Form";

export default function Inquiry() {
  return (
    <section className="space-y-7">
      <h1 className="text-right">Inquiry</h1>
      <h3>
        Please fill out the project inquiry form. We will schedule a
        consultation call to evaluate the project scope and share a detailed
        proposal.
      </h3>
      <div>
        <Form />
      </div>
    </section>
  );
}
