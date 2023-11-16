import { Accordion } from "keep-react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AccordionPart = () => {
  return (
    <>
      <SectionTitle
        subHeading={"Please read this"}
        heading={"Our Concern"}
      ></SectionTitle>

      <Accordion collapseAll={false} alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>What is the purpose of Sodium Cafe?</Accordion.Title>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dolores adipisci ratione odio natus velit soluta totam voluptatem.
              Reiciendis aperiam dolorum odio aliquam cumque, in sit similique
              pariatur ducimus illo libero quos neque ea? Laudantium facilis ex
              ab, et rerum est quaerat tenetur sed id error, placeat rem odio?
              Hic?
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What we follow for our customers?</Accordion.Title>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              atque ipsum maiores autem natus asperiores ex officiis, quia quod
              nostrum aliquid accusamus maxime debitis odit quo, architecto
              commodi, voluptatum soluta amet beatae repellendus. Repudiandae
              quo excepturi earum quod est? Harum corporis sint molestias
              reiciendis tempora perferendis deleniti consequatur ad dolorem?
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>What is our goal?</Accordion.Title>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nesciunt dolor dolore magni molestias? Sit commodi, nam voluptate
              fugiat libero dicta? Debitis, voluptate quos officia saepe fuga,
              eum eius corrupti magnam reprehenderit repellendus consectetur
              facilis laudantium iure molestias qui iste cupiditate libero.
              Voluptatibus voluptate aliquid repellat tenetur esse at molestiae.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the purpose of Sodium Cafe?</Accordion.Title>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nesciunt dolor dolore magni molestias? Sit commodi, nam voluptate
              fugiat libero dicta? Debitis, voluptate quos officia saepe fuga,
              eum eius corrupti magnam reprehenderit repellendus consectetur
              facilis laudantium iure molestias qui iste cupiditate libero.
              Voluptatibus voluptate aliquid repellat tenetur esse at molestiae.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the purpose of Sodium Cafe?</Accordion.Title>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nesciunt dolor dolore magni molestias? Sit commodi, nam voluptate
              fugiat libero dicta? Debitis, voluptate quos officia saepe fuga,
              eum eius corrupti magnam reprehenderit repellendus consectetur
              facilis laudantium iure molestias qui iste cupiditate libero.
              Voluptatibus voluptate aliquid repellat tenetur esse at molestiae.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the purpose of Sodium Cafe?</Accordion.Title>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nesciunt dolor dolore magni molestias? Sit commodi, nam voluptate
              fugiat libero dicta? Debitis, voluptate quos officia saepe fuga,
              eum eius corrupti magnam reprehenderit repellendus consectetur
              facilis laudantium iure molestias qui iste cupiditate libero.
              Voluptatibus voluptate aliquid repellat tenetur esse at molestiae.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default AccordionPart;
