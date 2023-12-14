const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path');
const filename = 'quiz-dhmt.txt';

// Đặt đường dẫn đến thư mục chứa file HTML
const publicPath = path.join(__dirname);

// Sử dụng middleware để cung cấp các tài nguyên tĩnh trong thư mục public
app.use(express.static(publicPath));


function getRandomInteger(min, max) {
    // Sử dụng Math.random() để sinh số ngẫu nhiên trong khoảng [0, 1)
    // Sau đó, nhân với phạm vi số bạn muốn và làm tròn để có số nguyên
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// app.get('/test', (req, res) => {
//     res.sendFile(path.join(publicPath, 'home1.html'));
// })

app.get('/', (req, res) => {
    var quiz = []

    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            console.error('Lỗi khi mở tệp:', err);
            return;
        }

        
        var question = "";
        var ans0 = "";
        var ans1 = "";
        var ans2 = "";
        var ans3 = "";


        let lines = data.split('\n');

    

        for (let i = 0; i < lines.length; i++) {
            if(i <= 100)
                console.log("Dòng " + (i + 1) + ": " + lines[i]);
            var temp = lines[i];

            if(temp.startsWith("T0")) {
                ans0 = temp.slice(Math.min(2, temp.length), -1);
                continue;
            }

            if(temp.startsWith("T1")) 
                ans1 = temp.slice(Math.min(2, temp.length), -1);

            else if(temp.startsWith("T2")) {
                ans2 = temp.slice(Math.min(2, temp.length), -1);
                continue;
            }

            else if(temp.startsWith("T3")) {
                ans3 = temp.slice(Math.min(2, temp.length), -1);

                quiz.push({
                    "question": question.slice(4, -1),
                    "ans0": ans0,
                    "ans1": ans1,
                    "ans2": ans2,
                    "ans3": ans3,
                });
                
                question = "";
                continue;
            }

            else{
                let stringWithoutSpaces = temp.split(" ").join("");
                if (stringWithoutSpaces == "") {
                    continue;
                }
                else {
                    question = question + temp;
                }
            }

            

        }
        

        console.log(quiz.length);
        console.log(quiz[0]);
        console.log(quiz[226]);
        console.log(quiz[227]);
        var temp = getRandomInteger(0, 227)
        res.send(quiz[temp]);
    
        
    });


    
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
