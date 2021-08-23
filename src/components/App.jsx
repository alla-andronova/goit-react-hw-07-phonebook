import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { fetchAllContacts } from "../redux/slices/contacts";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAllContacts()), [dispatch]);

  const contacts = useSelector((state) => state.contacts.items);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2 style={{ textAlign: "center" }}>Contacts</h2>}

      {contacts.length > 0 && <Filter />}

      <ContactList />
    </>
  );
}
