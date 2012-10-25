$(function() {
	var Thread = Backbone.Model.extend({
		initialize: function() {
			this.bind("change", function(data){
				console.log(data.get('content'));
			});
        },
		urlRoot: '/threads'
	});

	var ThreadList = Backbone.Collection.extend({
		model: Thread
	});

	var thread1 = new Thread({
		id: '15123142'
	});
	console.log(thread1.url());
	thread1.fetch();
});