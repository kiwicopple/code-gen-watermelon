// Auto-generated.
// Do not edit manually.

import { field, text } from '@nozbe/watermelondb/decorators'
import { Model } from '@nozbe/watermelondb'

export default class users extends Model {
  static table = 'users'

    @text('id') id: string
    @text('name') name: string
    @text('status') status: string
  
}