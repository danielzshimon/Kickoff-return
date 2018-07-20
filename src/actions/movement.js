// import { MOVE_PLAYER } from './types'

// export default function handleMovement (player) {
        
//     const playerSize = 40

//     function getNewPosition(direction){
//         const prevPosition =  store.getState().player.position//where my issue is I want to grab props
//         switch(direction){
//             case 'LEFT':
//                 return [prevPosition[0] - playerSize, prevPosition[1]]
//             case 'RIGHT':
//                 return [prevPosition[0] + playerSize, prevPosition[1]]
//             case 'UP':
//                 return [prevPosition[0], prevPosition[1] - playerSize]
//             case 'DOWN':
//                 return [prevPosition[0], prevPosition[1] + playerSize]
//         }
//     }

//     function dispatchMove(direction) {
//         store.dispatch({
//             type: MOVE_PLAYER,
//             payload: {
//                 position: getNewPosition(direction)
//             }
//         })
//     }

//     function handleKeyDown(e) {
//         e.preventDefault()
//         switch(e.keyCode){
//             case 37:  //left arrow
//                 return dispatchMove('LEFT')

//             case 38:  //up arrow
//                 return dispatchMove('UP')

//             case 39:  //right arrow
//                 return dispatchMove('RIGHT')

//             case 40:  //down arrow
//                 return dispatchMove('DOWN')

//             default:
//                 console.log(e.keyCode)
        
//         }
        
//     }

//         window.addEventListener('keydown', (e) => {
//             handleKeyDown(e)
//         })

//         return player 
//     }

