(function () {
    var customersService = function () {
        var customersdata = [
            {
                id: 1, name: 'Tom', city: 'Warsaw', age: 22,
                books: [
                    {id: 1, edition: 'third', author: 'Herbert Schildt'},
                    {id: 1, edition: 'second', author: 'E.Balagurusamy'}
                ]
            },
            {
                id: 2, name: 'Poul', city: 'NYE', age: 12,
                books: [
                    {
                        id: 2,
                        edition: 'second',
                        author: 'Herbert Schildt'
                    },
                    {
                        id: 2,
                        edition: 'first',
                        author: 'Eric Eco'
                    }
                ]
            },
            {
                id: 3, name: 'Adam', city: 'Cracow', age: 16,
                books: [
                    {
                        id: 3,
                        edition: 'third',
                        author: 'Miko³aj Kopernik'
                    },
                    {
                        id: 3,
                        edition: 'second',
                        author: 'Stefan Witkacy'
                    }
                ]
            },
            {
                id: 4, name: 'Fran', city: 'Paris', age: 45,
                books: [
                    {
                        id: 4,
                        edition: 'third',
                        author: 'Herbert Storm'
                    },
                    {
                        id: 4,
                        edition: 'first',
                        author: 'J.R.R. Martin'
                    }
                ]
            },
            {
                id: 5, name: 'Zed', city: 'Berlin', age: 32,
                books: [
                    {
                        id: 5,
                        edition: 'third',
                        author: 'Tolkien'
                    },
                    {
                        id: 5,
                        edition: 'first',
                        author: 'Stanis³aw Sienkiewicz'
                    }
                ]
            }
        ];



        this.getCustomers = function () {
            return customersdata;
        };

        this.getCustomers2 = function (bookId) {
            for (var i = 0, len = customersdata.length; i < len; i++) {
                if (customersdata[i].id === parseInt(bookId)) {
                    return customersdata[i];
                }
            }
            return [];
        }


    };

    angular.module('mainApp').service('customersService', customersService);


}());