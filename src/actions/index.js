import { MOVE_PLAYER } from './types'

export function makeMove(position) {
   return {
        type: MOVE_PLAYER,
        payload: {
            position: position
        }
    }
}
