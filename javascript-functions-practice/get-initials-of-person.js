/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  const initials = person.firstName[0] + person.lastName.charAt(0);
  return initials;
}
