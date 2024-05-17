export default () => ({
    isLoading: true,
    entries: [
        { 
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Aliquip magna duis laboris non mollit cillum sint magna adipisicing Lorem.',
            picture: null,
        },
        { 
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Dolor non aute quis aute id minim commodo fugiat amet dolor pariatur officia sunt proident.',
            picture: null,
        },
        { 
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'In aliqua occaecat ea sunt excepteur in ipsum nostrud est tempor velit sit et occaecat.',
            picture: null,
        },
    ]
})