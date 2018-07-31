import { MOVE_PLAYER, MOVE_BACKGROUND, ADD_OBSTACLES, LOSE_GAME, REMOVE_OBSTACLES } from './types'

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



 export function addObstaclesToState(newRowWithObstacles) {
    return {
         type: ADD_OBSTACLES,
         payload: {
            row: newRowWithObstacles
         }
     }
 }

 export function removeObstaclesFromState() {
    return {
         type: REMOVE_OBSTACLES
     }
 }

//  export function moveObstacles(obstacleTop) {
//     return {
//          type: MOVE_OBSTACLES,
//          payload: {
//             obstacleTop: ( obstacleTop + 5)
//          }
//      }
//  } 

//  export function removeObstacles(obstacle) {
//     return {
//          type: REMOVE_OBSTACLES,
//          payload: {
//              obstaclesArr: []
//          }
//      }
//  }

export function gameStatus() {
    return {
         type: LOSE_GAME
     }
 } 
