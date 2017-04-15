import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteTask: function (id){

			console.log('In Tasks in deleteTask::', id);

			//Delete task
			this.store.findRecord('task', id).then(function(task){

				// task.deleteRecord();
				task.destroyRecord();

				//Save to database
				// task.save();
			});
		}
	}
});
