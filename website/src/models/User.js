export default class User {
  constructor({
    id,
    name,
    events = [],
    total_events,
    total_late,
    total_cancelled,
  }) {
    this.id = id;
    this.name = name;
    this.events = events;
    this.total_events = total_events;
    this.total_late = total_late;
    this.total_cancelled = total_cancelled;
  }

  // this is now calculated in ProfileEvent.jsx instead:
  // averageLate() {
  //   return this.total_late / this.total_events;
  // }
  // averageCancelled() {
  //   return this.total_cancelled / this.total_events;
  // }
}
