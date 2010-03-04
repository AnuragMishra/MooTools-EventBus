var Person = new Class({
	initialize: function(name, greeting, eventBus) {
		this.name = name;
		this.greeting = greeting;
		this.eventBus = eventBus;
		
		this.eventBus.addObserver('hello', this.replyToHello.bind(this));
	},
	toElement: function() {
		if(this.element == undefined) {
			this.element = new Element('div', { text: this.name + ': ', 'class': 'person'});
		}
		return this.element;
	},
	/**
	 * Ignores the data sent in the notification
	 */
	replyToHello: function() {
		this.element.grab(new Element('span', { text: this.greeting }));
	}
});

var Animal = new Class({
	initialize: function(name, eventBus) {
		this.name = name;
		this.eventBus = eventBus;
		this.eventBus.addObserver('hello', this.bark.bind(this));
	},
	/**
	 * Uses the data sent in the notification
	 */
	bark: function(data) {
		this.element.grab(new Element('span', { text: data.code + '.. say what?? I do not speak your language hooman.'}));
	},
	toElement: function() {
		if(this.element == undefined) {
			this.element = new Element('div', { text: this.name + ': ', 'class': 'animal' });
		}
		return this.element;
	}
});

function init() {
	var eventBus = new EventBus();

	var michael = new Person('Michael', 'Hola!', eventBus);
	var dwight = new Person('Dwight', 'Well, hello there..', eventBus);
	var erin = new Person('Erin', 'Yo!', eventBus);

	var sam = new Animal('Sam', eventBus);
	var gatsby = new Animal('Gatsby', eventBus);

	[michael, dwight, erin, sam, gatsby].each(function(person) {
		$('main').grab(person);
	});


	$('hi').addEvent('click', function() {
		eventBus.postNotification('hello', { code: '4 8 15 16 23 42' });
	})
}

window.addEvent('domready', init);