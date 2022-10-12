export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [ // objects
        {
            name: 'postedBy',
            title: 'Posted By',
            type: 'postedBy'
        },
        { // actual comment
            name: 'comment',
            title: 'Comment',
            type: 'string'
        }
    ]
}