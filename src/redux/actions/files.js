const actions = {
    setAttachments: items => ({
        type: 'FILES:SET_FILES',
        payload: items
    }),
    removeAttachment: file => ({
        type: 'FILES:REMOVE_FILE',
        payload: file
    })
}

export default actions;