import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  return moment(params[0]).format('MMMM Do YYYY');
}

export default Ember.Helper.helper(formatDate);
