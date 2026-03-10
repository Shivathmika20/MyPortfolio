import {client} from "./client"

export async function getExperience() {
    return client.fetch(`
      *[_type == "experience"] | order(_createdAt asc) {
        _id, company, role, period, bullets
      }
    `);
  }