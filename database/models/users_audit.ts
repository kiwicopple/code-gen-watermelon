// Auto-generated.
// Do not edit manually.

import { field, text } from '@nozbe/watermelondb/decorators'
import { Model } from '@nozbe/watermelondb'

export default class users_audit extends Model {
  static table = 'users_audit'

    @text('id') id: string
    @text('created_at') created_at: string
    @text('user_id') user_id: string
    @text('previous_value') previous_value: string
  
}