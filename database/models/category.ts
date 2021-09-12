// Auto-generated.
// Do not edit manually.

import { field, text } from '@nozbe/watermelondb/decorators'
import { Model } from '@nozbe/watermelondb'

export default class category extends Model {
  static table = 'category'

    @text('id') id: string
    @text('name') name: string
  
}