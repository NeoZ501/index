            var button = document.getElementById("test");
            var counter = 0;
            var ammount = 1;

            const autoclicker = document.querySelector("[data-autoclicker]");
            const starter = document.querySelector("[data-start]");
            const stoper = document.querySelector("[data-stoper]");

            function start() {
                starter.innerHTML = "started";
                stoper.innerHTML = "stop";
                document.getElementById("text1").innerHTML = "started";
                setInterval(function(){
                    button.click()
                },ammount);
                ammount = 1;
                console.log(ammount+", if 1 - on")
            }

            function stop() {
                starter.innerHTML = "start";
                stoper.innerHTML = "stoped";
                document.getElementById("text1").innerHTML = "stoped";
                ammount = 0;
                console.log(counter+", clicks")
            }

            function count() {
                counter += ammount;
                document.getElementById("text2").innerHTML = counter;
                console.log(counter+", clicks")
                console.log(ammount+", if 1 - on")
            }

            console.log(counter+", clicks")
            console.log(ammount+", if 1 - on")
            console.log("starting upp click tester")
            console.log("click tester on")