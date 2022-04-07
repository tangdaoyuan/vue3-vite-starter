/**
 * Generate UUID
 */

import { v4 as uuidV4 } from 'uuid'

export const uuid = (): string => {
  return uuidV4()
}
