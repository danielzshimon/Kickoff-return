import { MOVE_PLAYER, MOVE_BACKGROUND, ADD_OBSTACLES, LOSE_GAME, REMOVE_OBSTACLES, RESET_GAME_PLAYER, RESET_GAME_BACKGROUND, RESET_GAME, RESET_GAME_OBSTACLES, START_GAME, LOST_GAME, STOP_BACKGROUND } from './types'

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

 export function stopBackground() {
    return {
         type: STOP_BACKGROUND,
        
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



export function gameStatus() {
    return {
         type: LOSE_GAME
     }
 } 

 export function resetGamePlayer(){
     return {
        type: RESET_GAME_PLAYER
     }
 }

 export function resetGameBackground(){
    return {
        type: RESET_GAME_BACKGROUND
    }
}

export function resetGameObstacles(){
    return {
        type: RESET_GAME_OBSTACLES
    }
}

export function resetGameStatus(){
    return {
        type: RESET_GAME
    }
}

export function startGame(){
    return {
        type: START_GAME
    }
}

export function lostGame(){
    return {
        type: LOST_GAME
    }
}
