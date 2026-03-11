import {client} from "./client"

export async function getExperience() {
    return client.fetch(`
      *[_type == "experience"] | order(_createdAt asc) {
        _id, company, role, period, bullets
      }
    `);
  }

export async function getProjects() {
    return client.fetch(`
      *[_type == "projects"] |  order(order asc) {
        _id, title, description, tags, githuburl,liveurl,order
      }
    `);
  }

  export async function getHackathons() {
    return client.fetch(`
      *[_type == "hackathons"] |  order(order asc) {
        _id, title, description, location, date,award,liveurl,logo,order
      }
    `);
  }