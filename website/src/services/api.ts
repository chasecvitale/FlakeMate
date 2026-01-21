import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { headers } from "next/headers";

const BACKEND_URL = 'http://localhost:3001/api'


export interface User{
    id: number;
    name: string;
    email: string;
    events: number[];
    total_events: number;
    total_late: number;
    average_late: number;
    average_cancelled: number;
    created_at: Timestamp;

}

export interface Event{
    id: number;
    google_event_id: string;
    title: string;
    description: string;
    participation: number[];
    start_time: string;
    end_time: string;
    cancellation_votes: number[];
    cancelled: boolean
    created_at: Timestamp;
}

