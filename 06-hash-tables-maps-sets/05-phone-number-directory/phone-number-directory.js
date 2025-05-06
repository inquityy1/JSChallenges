function phoneNumberDirectory(arr) {
  const contacts = new Map();

  for (const contact of arr) {
    const [key, value] = contact.split(":");

    contacts.set(key, value);
  }

  return contacts;
}

module.exports = phoneNumberDirectory;
