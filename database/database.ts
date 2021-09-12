// Auto-generated.
// Do not edit manually.

import Database from '@nozbe/watermelondb/Database'

import users from './models/users'
import todos from './models/todos'
import users_audit from './models/users_audit'
import category from './models/category'
import memes from './models/memes'


const database = new Database({
  modelClasses: [
    users,
    todos,
    users_audit,
    category,
    memes,
  ]
})