import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editTask: function (id){

			var self = this;

			var title = this.get('model.title');
			var date = new Date(this.get('model.date'));
			var desc = this.get('model.desc');

			//Edit task
			this.store.findRecord('task', id).then(function(task){
				task.set('title', title);
				task.set('date', date);
				task.set('desc', desc);

				//Save to database
				task.save();

				self.transitionToRoute('tasks.list');
			});
		},
		cancelTask: function (id){
			this.transitionToRoute('tasks.list');
		}
	}
});
