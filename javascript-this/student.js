/* exported student */

const student = {
  firstName: 'Alan',
  lastName: 'Ho',
  subject: 'JavaScript',
  getFullName: function () {
    const fullName = this.firstName + ' ' + this.lastName;

    return fullName;
  },
  getIntroduction: function () {
    const intro = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';

    return intro;
  }
};
