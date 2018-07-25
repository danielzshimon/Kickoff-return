import { MOVE_PLAYER, MOVE_BACKGROUND, ADD_OBSTACLES, STOP_BACKGROUND, MOVE_OBSTACLES } from './types'

export function makeMove(position) {
   return {
        type: MOVE_PLAYER,
        payload: {
            position: position
        }
    }
}

export function movingBackground(yPosition) {
    return {
         type: MOVE_BACKGROUND,
         payload: {
             yPosition: (yPosition + 5)
         }
     }
 }

 export function stopBackground(yPosition) {
    return {
         type: STOP_BACKGROUND,
         payload: {
             yPosition: (yPosition)
         }
     }
 }

 export function addObstaclesToState(newObstacles) {
    return {
         type: ADD_OBSTACLES,
         payload: {
            obstaclesArr: newObstacles
         }
     }
 }

 export function moveObstacles() {
    return {
         type: MOVE_OBSTACLES,
         payload: {
            
         }
     }
 } 

//  export function removeObstacles(obstacle) {
//     return {
//          type: REMOVE_OBSTACLES,
//          payload: {
//              obstaclesArr: []
//          }
//      }
//  }
