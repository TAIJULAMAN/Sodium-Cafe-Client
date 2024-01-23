import { Accordion } from "keep-react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AccordionPart = () => {
  return (
    <>
      <SectionTitle
        subHeading={"Please Read This!"}
        heading={"Our Concerns"}
      ></SectionTitle>

      <Accordion  alwaysOpen={false} className="bg-white">
        <Accordion.Panel>
          <Accordion.Title>What is the purpose of Sodium Cafe?</Accordion.Title>
          <Accordion.Content>
            <p className="bg-[#2B3440] text-white p-4 rounded">
              The purpose of Sodium Cafe is to create a culinary haven that
              caters to a diverse range of tastes and preferences. By offering a
              menu that includes BBQ, Chinese, Pizza, Meatbox, Burgers, and
              more, the cafe aims to provide a unique and satisfying dining
              experience for its customers. The fusion of different cuisines
              allows Sodium Cafe to appeal to a broad audience, offering
              something for everyone.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            What cuisines does Sodium Cafe specialize in?
          </Accordion.Title>
          <Accordion.Content>
            <p className="bg-[#2B3440] text-white p-4 rounded">
              Sodium Cafe specializes in a diverse range of cuisines, including
              BBQ, Chinese, Pizza, Meatbox, Burgers, and more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            What kind of atmosphere can patrons expect at Sodium Cafe?
          </Accordion.Title>
          <Accordion.Content>
            <p className="bg-[#2B3440] text-white p-4 rounded">
              Sodium Cafe aims to provide an inviting and cozy atmosphere for
              its patrons, creating a comfortable space for dining and
              socializing.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            What sets Sodium Cafe apart from other restaurants?
          </Accordion.Title>
          <Accordion.Content>
            <p className="bg-[#2B3440] text-white p-4 rounded">
              Sodium Cafe distinguishes itself through its innovative fusion of
              cuisines, offering a unique and varied menu that caters to a wide
              range of tastes.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            What is the commitment of Sodium Cafe when it comes to food quality?
          </Accordion.Title>
          <Accordion.Content>
            <p className="bg-[#2B3440] text-white p-4 rounded">
              Sodium Cafe is committed to maintaining high food quality
              standards, ensuring that each dish is crafted with care and
              culinary creativity for an exceptional dining experience.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            Can patrons customize their meals at Sodium Cafe?
          </Accordion.Title>
          <Accordion.Content>
            <p className="bg-[#2B3440] text-white p-4 rounded">
              Yes, Sodium Cafe offers customization options, allowing patrons to
              tailor their meals to suit their individual preferences and
              dietary requirements.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default AccordionPart;
