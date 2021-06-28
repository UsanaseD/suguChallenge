
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var Col1 = document.getElementById("col1");
            var Col2 = document.getElementById("col2")
            var button = document.getElementById("order")
            var col3 = document.getElementById("col3")
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = data[i].name;
                Col1.appendChild(div);
            }
                for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                    div.innerHTML = data[i].email;
                Col2.appendChild(div);
                }
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("button");
                div.innerHTML = 'Get Users Posts';
                button.appendChild(div);
                   div.addEventListener("click", () => {
                       for (var i = 0; i < data.length; i++) {
                           console.log(data[i])
                           var tb = document.createElement("div")
                           tb.innerHTML = data[i].id + ' ' + data[i].name
                               + ' || ' + data[i].email + data[i].phone
                               + ' || ' + data[i].username + ' || ' + data[i].company.bs
                           col3.appendChild(tb)
                       }
                })
               }

        }

