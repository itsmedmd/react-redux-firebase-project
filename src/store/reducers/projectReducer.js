const initState = {
    projects: [
        {id: '1', title: 'party starting boys', content: 'party we good!'},
        {id: '2', title: 'goin to shoot some hogs', content: 'yee haw KKona!'},
        {id: '3', title: 'AYAYA', content: 'japan so cool xd!'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' :
            console.log('created project', action.project );
    }
    return state;
};

export default projectReducer;