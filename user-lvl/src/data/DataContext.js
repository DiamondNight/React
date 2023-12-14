import React from 'react'

export const data = {
    userId: 0,
    userLevel: 0
}

const DataContext = React.createContext(data);

export default DataContext