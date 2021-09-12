// Auto-generated.
// Do not edit manually.

import { field, text } from '@nozbe/watermelondb/decorators'
import { Model } from '@nozbe/watermelondb'

export default class todos extends Model {
  static table = 'todos'

    @text('id') id: string
    @text('details') details: string
    @text('user-id') user-id: string
  
}