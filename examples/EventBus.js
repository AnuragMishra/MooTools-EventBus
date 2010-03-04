/**
 * A MooTools implementation of an event bus to decouple
 * the event sender from the receiver. It is very similar to 
 * NSNotificationCenter in Cocoa.
 * 
 * MooTools Class.Extras already implements events. This class
 * acts as a tiny wrapper around the Class event system of MooTools
 *
 * @author Anurag Mishra
 * @date 2010/03/03
 *
 */
var EventBus = new Class({
	Implements: Events,

	/**
	 * Register observer for the given notification.
	 * 
	 * @param notification:string Name of the notification
	 * @param observer:Object The observing object
	 */
	addObserver: function(notification, observer) {
		this.addEvent(notification, observer);
	},

	/**
	 * Remove observer for the given notification.
	 *
	 * @param notification:string Name of the notification
	 * @param observer:Object The observing object
	 */
	removeObserver: function(notification, observer) {
		this.removeEvent(notification, observer);
	},
	
	/**
	 * Broadcast notification to all registered observers
	 *
	 * @param notification:string Name of the notification
	 */
	postNotification: function(notification, data) {
		this.fireEvent(notification, data);
	}
});