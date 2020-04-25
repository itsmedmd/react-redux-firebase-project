const initState = {
    projects: [
        {id: '1', title: 'party starting boys', content: 'party we good!'},
        {id: '2', title: 'goin to shoot some hogs', content: 'yee haw KKona!'},
        {id: '3', title: 'AYAYA', content: 'japan so cool xd!'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return {
                ...state
            }
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err );
            return state;
        default:
            return state;
    }
};

export default projectReducer;