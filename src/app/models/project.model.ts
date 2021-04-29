import { Client } from '../models/client.model'
export interface Project {
    name: string;
    adress: string;
    client: Client;
    cost: number;
}

export function createNewProject(name: string, adress: string, client: Client): Project {
    return ({name, adress, client, cost: 0 })
}