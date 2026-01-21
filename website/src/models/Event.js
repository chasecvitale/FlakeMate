export default class Event {
  constructor({
    id,
    google_event_id,
    title,
    description,
    participation = [],
    start_time,
    end_time,
    cancelled,
  }) {
    this.id = id;
    this.google_event_id = google_event_id;
    this.title = title;
    this.description = description;
    this.participation = participation;
    this.start_time = start_time;
    this.end_time = end_time;
    this.cancelled = cancelled;
  }

  isCancelled() {
    return this.participation.length > 0 && this.participation.every(p => p.cancelled);
  }
}