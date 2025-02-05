import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { order } from './order'
import { item } from './item'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order,item],
}
