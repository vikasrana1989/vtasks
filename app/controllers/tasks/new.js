import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		addTask: function (){

			//Create a new task
			var newTask = this.store.createRecord('task', {
				title: this.get('title'),
				date: new Date(this.get('date')),
				desc: this.get('desc'),
			});

			//Save to database
			newTask.save();

			//Clear Form
			this.setProperties({
				title: '',
				date: '',
				desc: '',
			});

			this.transitionToRoute('tasks.list');
		},
		cancelTask: function (id){
			this.transitionToRoute('tasks.list');
		}
	}
});
