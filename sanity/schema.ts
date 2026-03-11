import { type SchemaTypeDefinition } from 'sanity'
import experience from './schemas/experience'
import project from './schemas/project'
import hackathon from './schemas/hackathon'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience,project,hackathon],
}
