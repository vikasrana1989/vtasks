import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  return moment(params[0]).format('MMMM Do YYYY, hh:mm a');
}

export default Ember.Helper.helper(formatDate);