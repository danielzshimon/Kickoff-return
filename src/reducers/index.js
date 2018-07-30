
const initialPlayerState = {
    position: [560, 560],

};

export const playerReducer = (state = initialPlayerState, action ) => {
    switch (action.type) {
      case 'MOVE_PLAYER':
        return {
            ...action.payload
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
        return { 
            ...action.payload
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
            obstaclesRowArr: [...state.obstaclesRowArr, ...action.payload.obstaclesRowArr]
        }

        case 'REMOVE_OBSTACLES':
        console.log('hi')
        return { ...state,
            obstaclesRowArr: [...state.obstaclesRowArr.slice(1)]

        }



      default:
        return state    
    
    }
};


const initialGameState = {
    win: false,
    lose: false,
    score: 0
};

export const gameReducer = (state = initialGameState, action ) => {
    switch (action.type) {
      

      default:
        return state    
    
    }
};