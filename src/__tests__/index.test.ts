import { describe, it, expect } from 'vitest'
import { truncate} from '../index'

describe('truncate', () => {
  describe('basic functionality', () => {
    it('should return the string', () => {
        expect(truncate('Hello World')).toBe('Hello World')
    })
  })
  })
