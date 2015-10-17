var express = require('express'), app=express();

app.use(express.static(__dirname + '/'));

app.get('/customers/:id',function(req,res){
    var bookId = parseInt(req.params.id);
    var data= {};
    for (var i = 0, len = customersdata.length; i < len; i++) {
        if (customersdata[i].id === parseInt(bookId)) {
            data = customersdata[i];
            break;
        }
    }
    res.set("Content-Type", "application/json");
    res.json(data);
});

app.get('/customers',function(req,res){
    res.set("Content-Type", "application/json");
    res.json(customersdata);
});

app.get('/books',function(req,res){
    res.json(customersdata);
});

app.listen(8033);

console.log('Express listening on port 8033');

var customersdata = [
    {
        id: 1, name: 'Tom', city: 'Warsaw', age: 22,
        books: [
            {id: 1, edition: 'third', author: 'Herbert Schildt',price:22},
            {id: 1, edition: 'second', author: 'E.Balagurusamy',price:34}
        ]
    },
    {
        id: 2, name: 'Poul', city: 'NYE', age: 12,
        books: [
            {
                id: 2,
                edition: 'second',
                author: 'Herbert Schildt',
                price:16
            },
            {
                id: 2,
                edition: 'first',
                author: 'Eric Eco',
                price:26
            },
            {
                id: 2,
                edition: 'second',
                author: 'Eric Clapton',
                price:15
            }
        ]
    },
    {
        id: 3, name: 'Adam', city: 'Cracow', age: 16,
        books: [
            {
                id: 3,
                edition: 'third',
                author: 'Mikołaj Kopernik',
                price:25
            }
        ]
    },
    {
        id: 4, name: 'Fran', city: 'Paris', age: 45,
        books: [
            {
                id: 4,
                edition: 'third',
                author: 'Herbert Storm',
                price:65
            },
            {
                id: 4,
                edition: 'first',
                author: 'J.R.R. Martin',
                price:32
            }
        ]
    },
    {
        id: 5, name: 'Zed', city: 'Berlin', age: 32,
        books: [
            {
                id: 5,
                edition: 'third',
                author: 'Tolkien',
                price:21
            },
            {
                id: 5,
                edition: 'first',
                author: 'Stanisław Sienkiewicz',
                price:18
            },
            {
                id: 5,
                edition: 'first',
                author: 'W. Szymborska',
                price:33
            }
        ]
    }
];