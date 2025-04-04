import React, { useState } from "react";
import Styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDesc("");
        setEmail("");
        setName("");
        setPhone("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
    console.log(e, "change");
  };
  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.mb3}>
          <label htmlFor="exampleInputName1" className={Styles.formlabel}>
            Name
          </label>
          <input
            type="name"
            value={name}
            onChange={handleChange}
            name="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
          />
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={Styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="exampleInputPhone1" className={Styles.formlabel}>
            Phone
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            name="phone"
            className="form-control"
            id="phone"
          />
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="desc">Concern</label>
          <textarea
            className="form-control"
            placeholder="Leave a Concern here"
            id="desc"
            name="desc"
            onChange={handleChange}
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
