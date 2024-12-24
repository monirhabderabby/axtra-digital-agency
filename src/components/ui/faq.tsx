import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const faqlist = [
  {
    id: 1,
    ques: "Design should enrich our day",
    desc: "Our design services start and end with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping, we design interfaces that bring joy to people.",
  },
  {
    id: 2,
    ques: "What services do you offer?",
    desc: "We offer a wide range of services, including branding, UI/UX design, product design, and prototyping, tailored to meet the unique needs of each client.",
  },
  {
    id: 3,
    ques: "How does your design process work?",
    desc: "Our process involves understanding your goals, creating a strategy, iterating through design prototypes, and refining solutions to ensure a seamless user experience.",
  },
  {
    id: 4,
    ques: "Why should I choose your design services?",
    desc: "Our team focuses on delivering innovative and user-centered designs that not only meet industry standards but also resonate with your target audience to ensure maximum impact.",
  },
];

const Faq = () => {
  return (
    <Accordion type="single" collapsible className="mt-10">
      {faqlist.map(({ id, ques, desc }) => (
        <AccordionItem value={`item-${id}`} key={id}>
          <AccordionTrigger>{ques}</AccordionTrigger>
          <AccordionContent>{desc}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
