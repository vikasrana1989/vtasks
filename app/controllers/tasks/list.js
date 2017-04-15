import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteTask: function (id){

			//Delete task
			this.store.findRecord('task', id).then(function(task){
				task.destroyRecord();
			});
		}
	},
	sortingKey:['date'],
	sortedModel:Ember.computed.sort('model', 'sortingKey')
});
