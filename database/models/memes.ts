// Auto-generated.
// Do not edit manually.

import { field, text } from '@nozbe/watermelondb/decorators'
import { Model } from '@nozbe/watermelondb'

export default class memes extends Model {
  static table = 'memes'

    @text('id') id: string
    @text('name') name: string
    @text('category') category: string
    @text('metadata') metadata: string
    @text('created_at') created_at: string
    @text('status') status: string
  
}