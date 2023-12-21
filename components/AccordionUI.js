"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import SpecificUser from "./SpecificUser";
import CreateUser from "./CreateUser";
import AllUsers from "./AllUsers";

const AccordionUI = () => {
  const [open, setOpen] = useState(3);

  const handleOpen = (value) =>
    setOpen(open === value ? 0 : value);

  return (
    <section className="w-[40rem]">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          All users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Search for specific user
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Create new user
        </AccordionHeader>
        <AccordionBody>
          <CreateUser />
        </AccordionBody>
      </Accordion>
    </section>
  );
};
export default AccordionUI;
