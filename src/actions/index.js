import { MOVE_PLAYER, MOVE_BACKGROUND, ADD_OBSTACLES, MOVE_OBSTACLES, LOSE_GAME } from './types'

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



 export function addObstaclesToState(newObstacles) {
    return {
         type: ADD_OBSTACLES,
         payload: {
            obstaclesArr: newObstacles
         }
     }
 }

 export function moveObstacles(obstacleTop) {
    return {
         type: MOVE_OBSTACLES,
         payload: {
            obstacleTop: ( obstacleTop + 5)
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

export function gameStatus(collision) {
    return {
         type: LOSE_GAME,
         payload: {
            lose: true
         }
     }
 } 
