import node from '@presta/adapter-node'

export const files = 'pages/*.ts'
export const plugins = [node({ port: process.env.PORT || 4000 })]
