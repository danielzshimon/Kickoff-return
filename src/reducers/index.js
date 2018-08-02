
const initialPlayerState = {
    position: [580, 530]

};

export const playerReducer = (state = initialPlayerState, action ) => {
    switch (action.type) {
      case 'MOVE_PLAYER':
        return {
            ...action.payload
        }

        case 'RESET_GAME_PLAYER':
        return {...state,
            position: initialPlayerState.position
        }

      default:
        return state    
    
    }
};


const initialBackgroundState = {
    yPosition: 0
};

export const backgroundReducer = (state = initialBackgroundState, action ) => {
    switch (action.type) {
      case 'MOVE_BACKGROUND':
        return {
            ...action.payload
        }

        case 'STOP_BACKGROUND':
        return {...state,
           yPosition: initialBackgroundState.yPosition
        }


      default:
        return state    
    
    }
};


const initialObstacleState = {
    obstaclesRowArr: []
    
}; 

export const obstacleReducer = (state = initialObstacleState, action ) => {
    switch (action.type) {
      case 'ADD_OBSTACLES':
        return { ...state,
            obstaclesRowArr: [...state.obstaclesRowArr, action.payload.row]
        }

        case 'REMOVE_OBSTACLES':
        let newRows = [...state.obstaclesRowArr]
        newRows.shift()
        return { ...state,
            obstaclesRowArr: [...newRows]
        }

        case 'RESET_GAME_OBSTACLES':
        return { ...state,
            obstaclesRowArr: []
        }



      default:
        return state    
    
    }
};


const initialGameState = {
    win: false,
    lose: false,
    gameStatus: 'notPlaying'
};

export const gameReducer = (state = initialGameState, action ) => {
    switch (action.type) {
        case 'LOSE_GAME':
        return { ...state,
            lose: true
        }

        case 'RESET_GAME':
        return { ...state,
            lose: false
        }

        case 'START_GAME':
        return {...state,
            gameStatus:'playing'
        }


        case 'LOST_GAME':
        return {...state,
            gameStatus:'lost'
        }

      default:
        return state    
    
    }
};