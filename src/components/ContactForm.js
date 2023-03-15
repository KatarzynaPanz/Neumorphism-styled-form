import React, { useState } from "react";
import Contact from "./Contact/Contact";
import About from "./About";
import Address from "./Address";
import Submit from "./Submit";

const ContactForm = (props) => {
  const { progressValue, setProgressValue } = props;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    voivodeship: "",
    textarea: "",
    age: "",
    education: "",
  });

  console.log(form);

  const [page, setPage] = useState(0);

  const [formErr, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    voivodeship: "",
    textarea: "",
    age: "",
    education: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const pages = {
    0: ["firstName", "lastName", "email", "password1", "password2"],
    1: ["street", "houseNumber", "zipCode", "city", "voivodeship"],
    2: ["textarea", "age", "education"],
  };

  const fields = {
    firstName: {
      label: "firstName",
      required: true,
      pattern: "^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$",
    },
    lastName: {
      label: "lastName",
      required: true,
      pattern: "^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$",
    },
    email: {
      label: "email",
      required: true,
      pattern: "([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)",
    },
    password1: {
      label: "password1",
      required: true,
      match: "password2",
    },
    password2: {
      label: "password2",
      required: true,
      match: "password1",
    },
    street: {
      label: "street",
      required: true,
      pattern: "^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$",
    },
    houseNumber: {
      label: "houseNumber",
      required: true,
      pattern: "^[0-9]$",
    },
    zipCode: {
      label: "zipCode",
      required: true,
      pattern: "^[0-9]{2}-[0-9]{3}$",
    },
    city: {
      label: "city",
      required: true,
      pattern: "^[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$",
    },
    voivodeship: {
      label: "voivodeship",
      required: true,
    },
    age: {
      label: "age",
      required: true,
    },
    education: {
      label: "education",
      required: true,
    },
  };

  const validate = (name, value, global = false) => {
    let err = "";
    const field = fields[name];
    if (field) {
      if (field.pattern) {
        const reg = new RegExp(field.pattern);
        if (!reg.test(value)) {
          err = `Dane w polu ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.`;
          console.log(value);
        }
      }
      if (field.required) {
        if (value.length === 0) {
          err = `Dane w polu ${field.label} są wymagane.`;
        }
      }
      if (global && field.match) {
        if (value != form[field.match]) {
          err = `Hasła nie są identyczne`;
        }
      }
      return err;
    }
  };

  const validatePage = (fields) => {
    let errors = {};
    fields.forEach((element) => {
      const err = validate(element, form[element], true);
      if (err) {
        errors[element] = err;
      }
    });
    return errors;
  };

  const nextStep = () => {
    const errors = validatePage(pages[page]);
    if (Object.keys(errors).length === 0) {
      setPage(page + 1);
      setProgressValue(progressValue + 100 / 3);
    } else {
      setFormError(errors);
    }
  };

  const prevStep = () => {
    setPage(page - 1);
    if (progressValue + 1 >= 100 / 3) {
      setProgressValue(progressValue - 100 / 3);
    }
  };

  const inputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
    const err = validate(name, value);
    setFormError({
      ...formErr,
      [name]: err,
    });
  };

  const selectedOption = (value) => {
    setForm({
      ...form,
      voivodeship: value,
    });
    //const err = validate(name, value);
    /*setFormError({
      ...formErr,
      voivodeship: err,
    });*/
    setIsOpen(false);
  };

  const submitForm = () => {
    console.log(form);
  };

  const clearFormFields = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      street: "",
      houseNumber: "",
      zipCode: "",
      city: "",
      voivodeship: "",
      textarea: "",
      age: "",
      education: "",
    });
    setProgressValue(0);
  };

  switch (page) {
    case 0:
      return (
        <Contact
          option="buttonLeft"
          firstName={form.firstName}
          lastName={form.lastName}
          email={form.email}
          password1={form.password1}
          password2={form.password2}
          form={form}
          setForm={setForm}
          nextStep={nextStep}
          change={inputChange}
          formErr={formErr}
        />
      );
    case 1:
      return (
        <Address
          option="buttonLeftAndRight"
          type="bigger"
          street={form.street}
          houseNumber={form.houseNumber}
          zipCode={form.zipCode}
          city={form.city}
          voivodeship={form.voivodeship}
          form={form}
          setForm={setForm}
          change={inputChange}
          nextStep={nextStep}
          prevStep={prevStep}
          formErr={formErr}
          toggling={toggling}
          isOpen={isOpen}
          selected={selectedOption}
        />
      );
    case 2:
      return (
        <About
          option="buttonLeftAndRight"
          form={form}
          setForm={setForm}
          change={inputChange}
          nextStep={nextStep}
          prevStep={prevStep}
          age={form.age}
          textarea={form.textarea}
          education={form.education}
          formErr={formErr}
        />
      );
    case 3:
      return (
        <Submit
          option="buttonRight"
          form={form}
          setForm={setForm}
          prevStep={prevStep}
          send={submitForm}
          clearForm={clearFormFields}
          formErr={formErr}
        />
      );
  }
};

export default ContactForm;
