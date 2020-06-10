const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

const users = [
    {id: 1, userName : "user1" },
    {id: 2, userName : "user2" },
    {id: 3, userName : "user3" },
]

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/users/:id', (req, res) =>{
    const user = users.find(u => u.id == parseInt(req.params.id))
    if (!user) {
        res.status(404).send()
    }
    res.send(user)
})

app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        userName: req.body.username
    }
    users.push(user);
    res.send(user)
})

app.delete('/api/users/:id', (req, res)=>{
    const index = users.findIndex( u=> u.id == parseInt(req.params.id))
    if(index < 0)
    {
        res.status(404).send()
    }
    deletedUser = users.splice(index, 1)
    res.send(deletedUser)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))