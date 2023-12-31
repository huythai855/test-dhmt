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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://huythai855.github.io');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});


app.get('/test', (req, res) => {
    res.sendFile(path.join(publicPath, 'home1.html'));
})

var namet = `H Thiết bị đầu vào thường dùng nhất là
T0 Bàn phím (Keyboard)
T1 Chuột (Mouse)
T2 Máy quét (Scanner)
T3 Máy in (Printer)


Những phím nào cho phép người dùng nhập các hoạt động thường xuyên sử dụng trong một lần ấn
phím (key stroke)?
T0 Phím chức năng (Function keys)
T1 Phím điều khiển con trỏ (Cursor control keys)
T2 Thiết bị chỉ “Trackball” (Trackball)
T3 Phím điều khiển (Control keys)


Điền vào phần bỏ trống ________ được dùng để đo độ xoay vòng quay.
T0 Chỉ đáp án {T1}
T1 Chiết áp (Potentiometers)
T2 Máy đo điện thế (Volta meter)
T3 Tham số (Parameter)


H Thiết bị dùng để chỉ vị trí con trỏ trên màn hình là
T0 Chuột (Mouse)
T1 Phím điều khiển trò chơi (Joystick)
T2 Găng tay cảm nhận (Data glove)
T3 Cả {T1} và {T2}


Điền vào phần bỏ trống _________ được dùng để phát hiển chuyển động của chuột.
T0 Cả {T1} và {T2}
T1 Cảm biến quang học (Optical sensor)
T2 Bi cuộn dưới đáy chuột (Rollers on the bottom of mouse)
T3 Cảm biến (Sensor)


H Trackball là
T0 Thiết bị trỏ vị trí 2 chiều (Two- dimensional positioning device)
T1 Thiết bị trỏ vị trí 3 chiều (Three- dimensional positioning device)
T2 Thiết bị trỏ (Pointing device)
T3 Không lựa chọn nào ở trên


Điền vào phần bỏ trống
Space ball cung cấp ________ bậc tự do.
T0 6 bậc
T1 10 bậc
T2 8 bậc
T3 12 bậc


H Loại thiết bị nào có thể xoay bằng cách xoay với ngón tay hoặc long bàn tay?
T0 Trackball
T1 Space ball
T2 Chỉ {T1}
T3 Không phải {T0}


Điền vào phần bỏ trống ________ được sử dụng cho trỏ 3 chiều, mô hình hóa, hoạt cảnh và các ứng dụng khác.
T0 Space ball
T1 Trackball
T2 Spac ball
T3 Tất cả các lựa chọn trên


H Chiết áp được gắn vào phần đế của phím điều khiển trò chơi đề đo
T0 Lượng chuyển động (The amount of movement)
T1 Hướng chuyển động (The direction)
T2 Vị trí (Position)
T3 Độ phân giải (Resolution)


H Phím điều khiển trò chơi nhạy cảm áp suất (Pressure-sensitive joysticks) còn được gọi là
T0 Phím điều khiển đối xứng (Isometric joystick)
T1 Phím không chuyển động (Non movable stick)
T2 Phím điều khiển (Joystick)
T3 Không đáp án nào nêu trên


Thiết bị nào dưới đây được xây dựng với các cảm biến dùng để phát hiện chuyển động bàn tay và
ngón tay?
T0 Găng tay cảm nhận (Data glove)
T1 Bộ số hóa (Digitizers)
T2 Phím điều khiển trò chơi (Joystick)
T3 Track ball


H Thiết bị phổ biến dùng để vẽ, tô màu hoặc lựa chọn vị trí tọa độ trên một đối tượng là
T0 Bộ số hóa (Digitizers)
T1 Máy quét ảnh (Image scanner)
T2 Găng tay cảm nhận (Data glove)
T3 Bảng lựa chọn bằng tiếp xúc (Touch panels)


Thiết bị nào được sử dụng làm đầu vào là tọa độ 2 chiều bằng cách kích hoạt con trỏ tay trên một bề
mặt phẳng?
T0 Cả {T1} và {T2}
T1 Graphic tablet
T2 Data tablet
T3 Chỉ {T2}


Điền vào phần bỏ trống ___________ được sử dụng để xác định vị trí trên data tablet.
T0 Hoặc Signal strength hoặc coded pulse
T1 Strip microphones
T2 Signal strength
T3 Coded pulse


Điền vào phần bỏ trống __________ cho phép vị trí trên màn hình được lựa chọn bằng việc tiếp xúc một ngón tay.
T0 Bảng lựa chọn bằng tiếp xúc (Touch panels)
T1 Máy quét ảnh (Image scanner)
T2 Light pen
T3 Mouse


H Nhược điểm của light pen là gì?
T0 Không thể phát hiện vị trí trong vùng màu đen
T1 Hình dáng
T2 Không thể phát hiện vị trí
T3 Đọc chính xác


Điền vào phần bỏ trống ________ Được sử dụng trong trạm làm việc đồ họa như là thiết bị vào chấp nhận các câu lệnh bằng
giọng nói.
T0 Bộ nhận dạng tiếng nói (Speech recognizers)
T1 Bảng lựa chọn bằng tiếp xúc (Touch panels)
T2 Chỉ a
T3 Tất cả các lựa chọn ở trên


H Giọng nói được sử dụng để làm gì trong hệ thống dùng giọng nói?
T0 Cả {T1} và {T2}
T1 Để khởi tạo các thao tác đồ họa (To initiate graphics operation)
T2 Để nhập dữ liệu (To enter data)
T3 Không a cũng không b


Điền vào phần bỏ trống
Khi một câu lệnh bằng giọng nói được đưa ra, hệ thống sẽ tìm kiếm trong_____________ để đối
sánh mẫu tần số.
T0 Từ điển (Dictionary)
T1 Bộ nhớ (Memory)
T2 Dữ liệu vào (Input data)
T3 Đĩa cứng (Hard disk)


H Thiết bị được thiết kế để tối thiểu hóa âm thanh nền là
T0 Micro (Microphone)
T1 Bộ số hóa (Digitizers)
T2 Găng tay cảm nhận (Data glove)
T3 Phím điều khiển trò chơi (Joy stick)


H Chất lượng một bức ảnh có được từ thiết bị phụ thuộc vào
T0 Tất cả các lựa chọn {T1}, {T2} và {T3}
T1 Kích cỡ của 1 điểm (Dot size)
T2 Số lượng điểm trên mỗi inch
T3 Số lượng dòng trên mỗi inch


H Thiết bị nào dưới đây không phải thiết bị vào?
T0 Dòng máy in tác động (Impact printers)
T1 Trackball và space ball
T2 Găng tay cảm nhận (Data glove)
T3


H Thiết bị nào dưới đây có chứa thumbwheel, trackball và mouse ball chuẩn?
T0 Chuột Z (Z mouse)
T1 Điều khiển trò chơi (Joystick)
T2 Chuột (Mouse)
T3 Trackball


H Thực tế ảo, CAD, và hoạt cảnh là ứng dụng của
T0 Chuột Z (Z mouse)
T1 Bộ số hóa (Digitizers)
T2 Bảng dữ liệu (Data tablets)
T3 Máy quét ảnh (Image scanner)


H Thiết bị nào cung cấp thông tin vị trí cho hệ thống đồ họa?
T0 Cả {T1} và {T3}
T1 Thiết bị vào (Input devices)
T2 Thiết bị ra (Output devices)
T3 Thiết bị trỏ (Pointing devices)


H Số lượng điểm ảnh được lưu trữ trong bộ đệm khung của một hệ thống đồ họa được biết đến như là
T0 Độ phân giải (Resolution)
T1 Độ sâu (Depth)
T2 Tốc độ làm tươi (Refresh rate)
T3 Dung lượng bộ nhớ (Capacity of memory)


H Trong hệ thống đồ họa, mảng các điểm ảnh trong một bức ảnh được lưu trữ trong
T0 Bộ đệm khung (Frame buffer)
T1 Bộ nhớ (Memory)
T2 Bộ vi xử lý (Processor)
T3 Tất cả các lựa chọn {T1} và {T2}


H Nhiệt được cung cấp cho ống ca tốt (cathode) bằng một dòng điện đi qua dây điện được gọi là
T0 Dây tóc (Filament)
T1 Súng điện tử (Electron gun)
T2 Dòng điện tử (Electron beam)
T3 A nốt và ca tốt (Anode and cathode)


H Số lượng tối đa các điểm có thể hiển thị không bị trung nhau trong ống CRT được coi như là
T0 Độ phân giải (Resolution)
T1 Ảnh (Picture)
T2 Đại lượng không đổi (Persistence)
T3 {T1} hoặc {T2}


Điền vào phần bỏ trống ________ lưu trữ thông tin ảnh như là phân bố sự thay đổi đằng sau màn hình phốt pho.
T0 Ống lưu trữ cảnh trực tiếp (Direct-view storage tube)
T1 Ống tia ca tốt (Cathode ray tube)
T2 Màn hình hiển thị phẳng (Flat panel displays)
T3 Thiết bị hiển thị ba chiều (3D viewing device)


H Thiết bị chuyển đổi từ năng lượng điện thành ánh sang được gọi là
T0 Bộ phát (Emitters)
T1 Màn hình tinh thể lỏng (Liquid-crystal displays)
T2 Bộ không phát (Non-emitters)
T3 Màn hình Plasma (Plasma panels)


Trong hệ thống nào, phương pháp mặt nạ tạo bóng (the Shadow mask methods )thường được sử
dụng
T0 Hệ thống quét mành (Raster-scan system)
T1 Hệ thống quét ngẫu nhiên (Random-scan system)
T2 Chỉ {T1}
T3 d) Cả {T0} và {T1}


Quá trình xử lý số hóa một ảnh cho trước thành tập cường độ điểm ảnh lưu trữ trong bộ đệm khung
được gọi là
T0 Chuyển đổi quét (Scan conversion)
T1 Mành hóa (Rasterization)
T2 Mã hóa (Encoding)
T3 Hệ thống màu thực (True color system)


Thiết bị hiển thị nào cho phép di chuyển xung quanh đối tượng và hiện thị đối tượng từ các hướng
khác nhau.
T0 Thiết bị hiển thị ba chiều (Three-dimensional devices)
T1 Ống lưu trữ cảnh trực tiếp (Direct view storage tubes)
T2 Thiết bị hiển thị màn hình phẳng (Flat panel display devices)
T3 Thiết bị hiển thị plasma (Plasma panel display devices)


H Trong màn hình LCD, tốc độ làm tươi của màn hình là
T0 60 khung hình /s
T1 80 khung hình /s
T2 30 khung hình /s
T3 100 khung hình /s


H Hệ thống quét ngẫu nhiên được thiết kế cho
T0 Ứng dụng vẽ đường thẳng (Line-drawing applications)
T1 Màn hình đổ bóng thực (Realistic shaded screen)
T2 Hiệu ứng sương mù (Fog effect)
T3 Chỉ {T2}


Thiết bị ra chính trong hệ thống đồ họa là _________
T0 Màn hình hiển thị video (Video monitor)
T1 Máy quét
T2 Không {T0} cũng không {T1}
T3 Máy in


Trên một hệ thống đen trắng với một bit trên một điểm ảnh (one bit per pixel), bộ đệm khung thường
được gọi là
T0 Bitmap
T1 Pix map
T2 Multi map
T3 Tất cả các lựa chọn {T0}, {T1} và {T2}


H “Aspect ratio” có nghĩa là
T0 Cả {T2} và {T3}
T1 Số lượng điểm ảnh (Number of pixels)
T2 Tỉ lệ điểm ảnh chiều cao so với chiều rộng (Ratio of vertical points to horizontal points)
T3 Tỉ lệ điểm ảnh chiều rộng so với chiều cao (Ratio of horizontal points to vertical points)


H Giao diện đồ họa cơ bản là
T0 Cả {T1} và {T2}
T1 Thiết bị trỏ (Pointing)
T2 Thiết bị định vị (Positioning)
T3 Không lựa chọn nào ở trên


H Các lựa chọn màu được mã hóa số với các giá trị sau.
T0 Miền bao gồm 0 và các số nguyên dương
T1 Miền từ 0 tới 1
T2 Miền từ 0 tới -0
T3 Chỉ {T2}


H Trong hệ thống mành có màu, số lượng màu sẵn có phụ thuộc vào
T0 Dung lượng cung cấp để lưu trữ 1 điểm ảnh trong bộ đệm khung
T1 Màu trong bộ đệm khung
T2 Màu RGB
T3 Không a cũng không b


H Màu có mã “000” là màu
T0 Đen
T1 Trắng
T2 Xanh dương
T3 Xanh lá


H Thông tin màu được lưu trữ trong
T0 Bộ đệm khung
T1 Bộ nhớ chính
T2 Bộ nhớ phụ
T3 Card đồ họa


Bất cứ khi nào một mã màu cụ thể được mô tả rõ trong một ứng dụng, giá trị nhị phân tương ứng
được lưu trữ trong?
T0 Trực tiếp trong bộ đệm khung (Directly in frame buffer)
T1 Bảng tra màu (Color look-up table)
T2 {T0} hoặc {T1}
T3 Bảng tra video (Video lookup table)


H Miền giá trị mô tả các mức xám
T0 Miền giá trị từ 0 tới 1
T1 Miền giá trị từ -1 tới 1
T2 Miền giá trị từ 0 tới -1
T3 Bất cứ lựa chọn nào ở trên


Với 3 bit cho một điểm ảnh, chúng ta có thể biểu diễn 8 mức xám. Nếu chúng ta sử dụng 8 bit cho
một điểm ảnh thì có thể biểu diễn được bao nhiêu mức xám?
T0 256 mức xám
T1 18 mức xám
T2 128 mức xám
T3 Không màu


H Với cường độ hiển thị tương ứng với màu cho trước, chỉ số ci được tính như sau
T0 Intensity=0.5[min(r, g, b)+ max(r, g, b)]
T1 Intensity=0.5[max(r, g, b)+ max(r, g, b)]
T2 Intensity=0.5[min(r, g, b)+ min(r, g, b)]
T3 Intensity=0.5[max(r, g, b)- max(r, g, b)]


H Một người sử dụng có thể thiết lập đầu vào bảng màu trong chương trình ứng dụng PHIGS với hàm
T0 setColourRepresentation (ws, ci, colorptr)
T1 setColorRepresentation (ws, ci, colorptr)
T2 setColour (ws, ci, colorptr)
T3 setColourRepresentation ()


Nếu bất cứ giá trị cường độ vào gần 0.33 có thể được lưu trữ thành giá trị nhị phân 1 trong bộ đệm
khung thì nó biểu
T0 Màu xám tối
T1 Màu xanh lá tối
T2 Màu xám sáng
T3 Trắng hoặc đen


H Một kiểu tô màu cơ bản trong chương trình PHIGS là hàm
T0 setInteriorStyle (fs)
T1 setStyle (fs)
T2 SetfillStyle (fs)
T3 setInteriorStyleIndex (fs)


H Loại này không phải kiểu tô màu cơ bản?
T0 Tối (Dark)
T1 Rỗng (Hollow)
T2 Màu đặc (solid color)
T3 Mẫu (Pattern)


H 13. Quá trình tô màu một vùng với mẫu hình chữ nhật được gọi là
T0 Tiling
T1 Linear fill
T2 Tint-fill
T3 Soft-fill


Thuật toán tô màu lại một vùng mà trước đó đã được tô bằng cách trộn màu “foreground color F” và
”background color B” khi F!=B là.
T0 Linear soft-fill
T1 Tint fill
T2 Flood fill
T3 Boundary fill


H Màu tô kết hợp với màu nền “ là
T0 Cả {T1} và {T2}
T1 Soft fill
T2 Tint fill
T3 Không lựa chọn nào


H Thủ tục tô màu vân “Hatch fill” được gọi để vẽ
T0 Hoặc {T1} hoặc {T2}
T1 Single hatching
T2 Cross hatching
T3 Chỉ {T2}


Khi hai màu nền (background color) B1 và B2 được trộn với màu ”foreground color F”, kết quả
được màu P được tính như sau
T0 Only {T1}
T1 P=t0*F+t1*B1+(1-t0-t1)B2
T2 P=t0*F-t1*B1+(1-t0-t1)B2
T3 P=t0*F+t1*B1+(1+t0+t1)B2


H Phép toán được dùng để kết hợp mẫu tô (fill pattern) với mẫu nền (background pattern) là
T0 Tất cả các lựa chọn {T1}, {T2} và {T3}
T1 a) AND
T2 b) OR
T3 c) X-OR


H Vùng rỗng (Hollow areas) được hiển thị chỉ dùng
T0 Viền biên (Boundary outline)
T1 Lộ trình vẽ đường thẳng (Line-drawing routine)
T2 Mẫu vân sọc (Hatched patterns)
T3 Chuỗi các đường thẳng khép kín (Closed poly line)


H Các lựa chọn cho tô màu một vùng được định nghĩa bao gồm một lựa chọn giữa __________
T0 Cả {T1} và {T2}
T1 Màu đặc hoặc mẫu (Solid color or a pattern fill)
T2 Các lựa chọn cho các màu và mẫu cụ thể (Choices for particular colors and pattern)
T3 Không lựa chọn nào


H Các dòng quét được sử dụng để quét từ
T0 Đỉnh tới đáy (Top to bottom)
T1 Đáy tới đỉnh (Bottom to top)
T2 Cả {T0} và {T1}
T3 Không lựa chọn nào


H Phương trình đường thẳng dưới dạng hệ số góc (Cartesian slope-intercept equation) có dạng như sau
T0 y = m.x + b
T1 y = b.x + m
T2 y = x.x + m
T3 y = b + m.m


Đối với các đường thẳng có hệ số góc m với |m|<1, khi áp dụng thuật toán đơn giảng để vẽ đường
thẳng thì
T0 Tăng x lên 1 đơn vị rồi tính y
T1 Tăng y lên 1 đơn vị rồi tính x
T2 Cả {T0} và {T1}
T3 Không lựa chọn nào ở trên


H Trong hệ thống mành hóa, các đường thẳng được vẽ dưới dạng
T0 Điểm ảnh
T1 Đường thẳng
T2 Chấm
T3 Không lựa chọn nào ở trên


H Tên đầy đủ của DDA trong thuật toán DDA là
T0 Digital differential analyzer
T1 Digital difference analyzer
T2 Direct differential analyzer
T3 Data differential analyzer


Thuật toán nào là phương pháp nhanh nhất tìm vị trí của điểm ảnh khi vẽ đường thẳng trong số các
thuật toán dưới đây?
T0 Thuật toán vẽ đường thẳng Bresenham
T1 Thuật toán vẽ đường thẳng dùng đường thẳng hệ số góc đơn giản
T2 Thuật toán điểm giữa vẽ đường thẳng
T3 Thuật toán DDA vẽ đường thẳng


H Một thuật toán mành hóa vẽ đường thẳng chính xác và hiệu quả là
T0 Thuật toán vẽ đường thẳng Bresenham
T1 Thuật toán vẽ đường thẳng dùng đường thẳng hệ số góc đơn giản
T2 Thuật toán điểm giữa vẽ đường thẳng
T3 Thuật toán DDA vẽ đường thẳng


H Trong thuật toán Bresendham vẽ đường thẳng, Nếu d1 < d2 thì tham số quyết định Pk là______
T0 Âm
T1 Dương
T2 Tương đương
T3 {T0} hoặc {T1}


H Thuật toán vẽ đường thẳng nào là tốt nhất trong việc cân bằng tải xử lý giữa các bộ xử lý?
T0 Thuật toán song song vẽ đường thẳng
T1 Thuật toán vẽ đường thẳng Bresenham
T2 Thuật toán điểm giữa vẽ đường thẳng
T3 Thuật toán DDA vẽ đường thẳng


H Thuật toán sử dụng nhiều bộ xử lý để tính toán các vị trí của điểm ảnh là
T0 Thuật toán song song vẽ đường thẳng
T1 Thuật toán vẽ đường thẳng Bresenham
T2 Thuật toán điểm giữa vẽ đường thẳng
T3 Thuật toán DDA vẽ đường thẳng


H Tham chiếu tọa độ trong hàm vẽ chuỗi đường thẳng được chỉ ra như
T0 Giá trị tọa độ tuyệt đối (Absolute coordinate values)
T1 Giá trị tọa độ liên quan (Relative coordinate values)
T2 Vị trí hiện tại (Current position)
T3 Giá trị tọa độ thực (Real coordinate values)


H Để áp dụng phương pháp điểm giữa vẽ đường tròn, chúng ta định nghĩa
T0 circle(x, y)= x 2+ y2- r2
T1 circle(x, y)= x + y2- r2
T2 circle(x, y)= x 2+ y- r
T3 circle(x, y)= x 2+ y2- z2


Điền vào phần bỏ trống _______ được định nghĩa là tập các điểm sao tổng khoảng cách từ điểm đó tới 2 điểm cố định cho
trước không đổi.
T0 Elip
T1 Đường thẳng
T2 Đường tròn
T3 Tam giác


Nếu đường biên được mô tả với một màu, thì thuật toán xuất phát từ một điểm xử lý từng điểm ảnh
cho đến khi gặp được màu biên được gọi là
T0 Thuật toán tô màu loang (Flood-fill algorithm)
T1 Thuật toán tô màu dòng quét (Scan-line fill algorithm)
T2 Thuật toán tô biên (Boundary-fill algorithm)
T3 Thuật toán đường cong song song (Parallel curve algorithm)


H Thuật toán tô phủ loang dùng quan hệ láng giềng nào
T0 c) Cả {T1} và {T2}
T1 4 láng giềng
T2 8 láng giềng
T3 d) Chỉ {T1}


H Thuộc tính cơ bản của đoạn thẳng là
T0 Tất cả lựa chọn {T1}, {T2} và {T3}
T1 Kiểu
T2 Độ rộng
T3 Màu


H Một đường thẳng tô nét đứt (dashed line) được hiển thị bằng cách sinh ra _________.
T0 Inter dash spacing
T1 Very short dashes
T2 Cả {T1} và {T2}
T3 d) {T1} hoặc {T2}


H Một đường thẳng tô dưới dạng điểm (dotted line) có thể được hiển thị bằng cách sinh ra
T0 Very short dashes với khoảng trắng lớn hơn hoặc bằng cỡ của dash
T1 Very short dashes với khoảng trắng nhỏ hơn hoặc bằng cỡ của dash
T2 Very long dashes với khoảng trắng lớn hơn hoặc bằng cỡ của dash
T3 Dots


H Lựa chọn nào dưới đây không phải kiểu đường thẳng (line-type)?
T0 Chỉ {T2}
T1 Dashed line
T2 Dark line
T3 Dotted line


H Trong một ứng dụng, để thiết lập thuộc tính kiểu đường thẳng (line-type) chúng ta dùng câu lệnh
T0 setLinetype(lt)
T1 SetLinetype(lt)
T2 SETLINETYPE(lt)
T3 SETLINE()


Thuật toán hiển thị thuộc tính kiểu đường thẳng (line-type) bằng cách vẽ từng nhịp điểm ảnh (pixel
span) là
T0 Raster line algorithm
T1 Raster scan algorithm
T2 Random line algorithm
T3 Random scan algorithm


H Mặt nạ điểm ảnh (Pixel mask) có nghĩa là
T0 Chuỗi chứa 0 và 1
T1 Chuỗi chỉ chứa 1
T2 Chuỗi chỉ chứa 0
T3


H Một “heavy line” trên màn hình video có thể hiển thị như
T0 Adjacent parallel lines
T1 Adjacent perpendicular lines
T2 Cả {T0} và {T1}
T3 Hoặc {T0} hoặc {T1}


H Tham số cho “setLineWidthScaleFactor (lw) “ được mô tả là?
T0 Độ rộng của đường thẳng đang vẽ (Relative width of the line)
T1 Độ rộng chuẩn (Standard width)
T2 Độ dày của đường thẳng đang vẽ (Thickness of the line)
T3 Tất cả các lựa chọn trên


Chúng ta có thể chỉnh hình dáng của các điểm cuối (line ends) của đường thẳng có bề ngoài tốt hơn
sử dụng
T0 Line caps
T1 Line spacing
T2 More dots
T3 Round cap


H Độ dày đường thẳng (Thick line) được vẽ với
T0 Tất cả các lựa chọn trên
T1 Butt caps
T2 Round caps
T3 Projecting square caps


H Chúng ta thiết lập giá trị màu đường thẳng (line-color value) trong PHIGS bằng hàm
T0 setPolylineColorIndex (lc)
T1 setline Color()
T2 SETPOLYLINECOLORINDEX (lc)
T3 d) Chỉ {T1}


Điền vào phần bỏ trống
Nếu góc giữa hai đoạn thẳng nối nhau là rất nhỏ thì ________ có thể sinh ra sự tăng đột biến làm
biến dạng bề ngoài của polyline.
T0 Miter join
T1 Round join
T2 Bevel join
T3 Không lựa chọn nào


H Một đường thẳng được vẽ với màu nền thì
T0 Invisible
T1 Visible
T2 Visible or Invisible
T3 Một đường thẳng được vẽ với màu nền thì


H Giá trị của tham số t nằm giữa
T0 1 và 10
T1 1 và 2
T2 0 và 1
T3 0 và 3


H Quá trình ánh xạ từ cửa sổ thế giới từ hệ tọa độ thế giới sang viewport được gọi là
T0 Transformation viewing
T1 Viewport
T2 Clipping window
T3 Screen coordinate system


Quá trình trích chọn một phần của cơ sở dữ liệu hoặc một ảnh bên trong/ bên ngoài của một vùng
được gọi là
T0 Clipping
T1 Transformation
T2 Projection
T3 Mapping


H Phần hình chữ nhật của một cửa sổ giao diện nơi mà bức ảnh sẽ xuất hiện được gọi là
T0 View port
T1 Transformation viewing
T2 Clipping window
T3 Screen coordinate system


H Hệ tọa độ của cửa sổ nơi đối tượng thật xuất hiện được gọi là ..............
T0 World coordinates
T1 Screen coordinates
T2 Device coordinates
T3 Cartesian coordinates


H Hệ tọa độ của viewport được gọi là ............
T0 Screen coordinates
T1 World coordinates
T2 Polar coordinates
T3 Cartesian coordinates


H Vùng chứa đối tượng sau khi bị cắt xén được gọi là ..............
T0 Clip window
T1 Boundary
T2 Enclosing rectangle
T3 Clip square


Điền vào phần bỏ trống
............. để xác định vùng ảnh nằm ngoài cửa sổ cắt xén (clip window)
T0 Exterior clipping
T1 Interior clipping
T2 Extraction
T3 Không lựa chọn nào ở trên


H Xác định thuật toán dùng để cắt xén đoạn thẳng
T0 Tất cả các lựa chọn {T1}, {T2} và {T3}
T1 Cohen- Sutherland algorithm
T2 Liang-Barsky clipping
T3 Nicholl-Lee-Nicholl clipping


Điền vào phần bỏ trống
Mã dùng để mã hóa vùng cửa sổ cắt xén là ............
T0 0000
T1 1111
T2 1000
T3 0001


Theo thuật toán Cohen-Sutherland, một đoạn thẳng hoàn toàn nằm bên ngoài cửa sổ cắt xén nếu
............
T0 Mã của hai đầu mút đoạn thẳng có cùng bit '1' tại cùng vị trí.
T1 Mã của hai đầu mút đoạn thẳng có giá trị khác 0
T2 Nếu bit L và R khác 0.
T3 Mã của hai đầu mút đoạn thẳng có cùng bit '0' tại cùng vị trí.


Điền vào phần bỏ trống
Mã của một điểm là 1001. Điểm đó nằm ở vùng ................. so với cửa sổ cắt xén.
T0 Top left
T1 Top right
T2 Bottom left
T3 Botton right


T0 Đoạn thẳng nằm hoàn toàn bên ngoài cửa sổ cắt
T1 Đoạn thẳng nằm hoàn toàn bên trong cửa sổ cắt
T2 Đoạn thẳng có một phần nằm bên trong cửa sổ cắt
T3 Đoạn thẳng đã được cắt


Điền vào phần bỏ trống
Bit bên trái (L bit ) của mã của điểm (X,Y) là '1' nếu ......................
T0 X< XWMIN
T1 X > XWMIN
T2 X< XWMAX
T3 X>XWMAX


H Bit bên phải (R bit ) của mã của điểm (X,Y) là '1' nếu......................
T0 X>XWMAX
T1 X > XWMIN
T2 X< XWMIN
T3 X< XWMAX


Điền vào phần bỏ trống
Bit trên đỉnh (T bit ) của mã của điểm (X,Y) là '1' nếu ......................
T0 Y>YWMAX
T1 Y > YWMIN
T2 Y< YWMIN
T3 Y< YWMAX


H Bit dưới đáy (B bit ) của mã của điểm (X,Y) là '1' nếu .......................
T0 Y< YWMIN
T1 Y > YWMIN
T2 Y< YWMAX
T3 Y>YWMAX


Điền vào phần bỏ trống
Thuật toán ...................... chia không gian 2 chiều thành 9 vùng, trong đó vùng ở giữa (viewport)
chứa phần hiển thị của đối tượng
T0 Cohen-Sutherland
T1 Liang Barsky
T2 Sutherland Hodegeman
T3 N-L-N


H Phép toán được sử dụng để kiểm tra đoạn thẳng có bị cắt xén hay không.............
T0 logical AND
T1 logical XOR
T2 logical OR
T3 Cả {T1} và {T2}


H Thuật toán Sutherland Hodgeman hoạt động tốt trong trường hợp cắt xén...........
T0 Convex polygon
T1 Concave polygon
T2 Smooth curves
T3 Line segment


Điền vào phần bỏ trống
Một phép biến đổi làm xiên (slants) hình dáng của đối tượng được gọi là ....................
T0 Shear
T1 Reflection
T2 Distortion
T3 Scaling


H Phép biến đổi tịnh tiến được áp dụng cho một đối tượng (object) bằng cách
T0 Đặt lại vị trí của đối tượng dọc theo một đường thẳng
T1 Đặt lại vị trí của đối tượng dọc theo một cung tròn
T2 Chỉ {T1}
T3 Tất cả các lựa chọn trên


H Chúng ta tịnh tiến một điểm 2 chiều bằng cách cộng thêm
T0 Khoảng cách dịch chuyển
T1 Độ lệch theo X
T2 X và Y
T3 Độ lệch theo Y


H Các khoảng cách dịch chuyển (dx, dy) được gọi là
T0 Cả {T1} và {T2}
T1 Véc tơ dịch chuyển
T2 Véc tơ tịnh tiến
T3 Không phải lựa chọn {T1} cũng không phải lựa chọn {T2}


Trong tịnh tiến 2 chiều, một điểm (x, y) có thể dịch chuyển sang vị trí mới (x’, y’) bằng cách sử
dụng phương trình
T0 x’=x+dx and y’=y+dy
T1 x’=x+dx and y’=y+dx
T2 X’=x+dy and Y’=y+dx
T3 X’=x-dx and y’=y-dy


H Phương trình của phép biến đổi tịnh tiến khi điểm biểu diễn dưới dạng tọa độ Đecác là
T0 P’=P+T
T1 P’=P-T
T2 P’=P*T
T3 P’=p


Điền vào phần bỏ trống _________ là một phép biến đổi không biến đổi hình dạng (rigid body transformation) chỉ thay đổi
vị trí đối tượng mà không làm biến dạng nó.
T0 d) {T1} và {T3}
T1 Quay
T2 Co dãn
T3 Tịnh tiến


H Một đoạn thẳng được tịnh tiến bằng cách áp dụng phương trình biến đổi
T0 P’=P+T
T1 Dx và Dy
T2 P’=P+P
T3 Chỉ {T2}


Điền vào phần bỏ trống
Các đa giác được dịch chuyển bằng cách công thêm __________ vào vị trí tọa độ của mỗi đỉnh và
thiết lập thuộc tính hiện tại.
T0 Véc tơ tịnh tiến
T1 Đường đi một đường thẳng
T2 Độ lệch
T3 {T1} và {T3}


H Để thay đổi vị trí của một đường tròn hay elip chúng ta tịnh tiến
T0 Tọa độ tâm và vẽ lại hình ở vị trí mới
T1 Tọa độ tâm
T2 Các tạo độ biên
T3 Tất cả các lựa chọn trên


H Các phép biến đổi hình học afin bao gồm
T0 Tất cả các lựa chọn {T1}, {T2} và {T3}
T1 Tịnh tiến
T2 Quay
T3 Co dãn


H Một phép quay hai chiều được áp dụng cho một đối tượng bằng cách
T0 Đặt lại vị trí của đối tượng dọc theo một cung tròn
T1 Đặt lại vị trí của đối tượng dọc theo một đường thẳng
T2 Chỉ {T1}
T3 Tất cả các lựa chọn trên


H Để sinh ra một phép quay, chúng ta phải mô tả
T0 Góc quay ϴ
T1 Khoảng cách dx và dy
T2 Khoảng cách quay
T3 Tất cả các lựa chọn trên


H Các giá trị dương trong phép quay của góc quay ϴ định nghĩa
T0 Góc quay ngược chiều kim đồng hồ xung quanh tâm quay
T1 Góc quay ngược chiều kim đồng hồ xung quanh điểm cần quay
T2 Tịnh tiến ngược chiều kim đồng hồ quanh tâm quay
T3 Hướng âm


H Trục quay vuông góc với mặt phẳng xy và đi qua một điểm chốt được gọi là
T0 Phép quay
T1 Phép tịnh tiến
T2 Phép có dãn
T3 Phép kéo


H Tọa độ Đềcac của một điểm trong hệ tọa độ cực là
T0 X’=r cos (Ф +ϴ) and Y’=r sin (Ф +ϴ)
T1 X’=r cos (Ф +ϴ) and Y’=r cos (Ф +ϴ)
T2 X’=r cos (Ф -ϴ) and Y’=r cos (Ф -ϴ)
T3 X’=r cos (Ф +ϴ) and Y’=r sin (Ф -ϴ)


H Phương trình phép quay 2 chiều là
T0 P’=R*P
T1 P’=P+T
T2 P’=P*P
T3 P’=R+P


Điền vào phần bỏ trống ________ là phép biến đổi di chuyển đối tượng theo quĩ đạo tròn
T0 Quay
T1 Tịnh tiến
T2 Co dãn
T3 Kéo


H Một elip có thể quay quanh tâm của nó bằng cách quay
T0 Trục lớn, trục nhỏ
T1 Các điểm đầu mút
T2 Chỉ {T1}
T3 Không lựa chọn nào ở trên


H Chỉ ra phép biến đổi được sử dụng để thay đổi kích cỡ của đối tượng
T0 Co dãn
T1 Quay
T2 Tịnh tiến
T3 Phản xạ


H Phương trình của phép co dãn 2 chiều
T0 P’=S*P
T1 P’=P+T
T2 P’=P*R
T3 P’=R+S


H Co dãn một hình đa giác bằng cách tính
T0 Nhân hệ số co dãn (x, y) với từng đỉnh
T1 Chia hệ số co dãn (x,y) cho từng đỉnh
T2 Các tọa độ tâm
T3 Các tọa độ đỉnh


H Nếu các hệ số co dãn sx và sy < 1 thì
T0 Phép biến đổi giảm kích cỡ đối tượng
T1 Phép biến đổi tăng kích cỡ đối tượng
T2 Phép biến đổi làm xiên đối tượng
T3 Không đối tượng nào


H Nếu giá trị của các hệ số co dãn sx và sy bằng nhau thì
T0 Phép biến đổi là phép co dãn đồng nhất
T1 Phép biến đổi là phép quay đồng nhất
T2 Phép co dãn không thể thực hiện được
T3 Chỉ {T1}


H Các đối tượng được biến đổi theo phương trình P’=S*P có thể là
T0 Cả {T1} và {T2}
T1 Bị co dãn
T2 Bị xác định lại vị trí
T3 Không lựa chọn nào


H Chúng ta kiểm soát vị trí của đối tượng bị co dãn bắng cách chọn một điểm được biết đến là
T0 Điểm cố định (Fixed point)
T1 Điểm xoay (Pivot point)
T2 Co dãn không đồng nhất
T3 Co dãn đồng nhất


H Nếu các giá trị co dãn là sx=1 và sy=1 thì
T0 Đối tượng không thay đổi kích cỡ
T1 Đối tượng bị giảm kích cỡ
T2 Biến dạng bức ảnh
T3 Đối tượng bị tăng kích cỡ


H Các đa giác bị co dãn bởi áp dụng phương trình biến đổi sau.
T0 X’=x * Sx + Xf(1-Sx) and Y’=y * Sy + Yf(1-Sy)
T1 X’=x * Sx + Xf(1+Sx) and Y’=y * Sy + Yf(1+Sy)
T2 X’=x * Sx + Xf(1-Sx) and Y’=y * Sy – Yf(1-Sy)
T3 X’=x * Sx * Xf(1-Sx) and Y’=y * Sy * Yf(1-Sy)


H Biểu diễn dạng ma trận của phép tịnh tiến trong hệ tọa độ đồng là
T0 P’=T*P
T1 P’=T+P
T2 P’=S*P
T3 P’=R*P


H Nếu giá trị của các hệ số co dãn sx và sy không bằng nhau thì
T0 Phép biến đổi là phép co dãn không đồng nhất
T1 Phép biến đổi là phép co dãn đồng nhất
T2 Phép co dãn không thể thực hiện được
T3 Không phải lựa chọn {T0} cũng không phải lựa chọn {T1}


H Biểu diễn mà trận cho biến đổi co dãn trong hệ tọa độ đồng nhất là
T0 P’=S*P
T1 P’=R*P
T2 P’=dx+dy
T3 P’=S*S


H Biểu diễn mà trận cho phép quay trong hệ tọa độ đồng nhất là
T0 P’=R*P
T1 P’=T+P
T2 P’=S*P
T3 P’=dx+dy


H Việc sử dụng của hệ tọa độ đồng nhất và biểu diễn ma trận là để
T0 Biểu diễn các phép biến đổi theo một cách đồng nhất
T1 Thực diễn co dãn
T2 Thực hiện phép quay
T3 Thực hiện phép kéo


Nếu một điểm được biểu diễn trong hệ tọa độ đồng nhất thì cặp (x, y) trông hệ tạo độ Đecac sẽ được
biểu diễn như sau
T0 (x’, y’, w)
T1 (x’, y’, z’)
T2 (x, y, z)
T3 (x’, y’, w)


H Trong phép biến đổi hai chiều giá trị thành phần tọa độ thứ 3 w=?
T0 1
T1 0
T2 -1
T3 Bất cứ giá trị nào


Chúng ta có thể kết hợp các phép biến đổi 2 chiều thành một phép biến đổi dùng biểu diễn các điểm
trong hệ trục tọa độ đồng nhất bằng cách mở rộng biểu diễn ma trận
T0 ma trận 2 x 2 thành ma trận 3x3
T1 ma trận 2 x 2 thành ma trận 4x4
T2 ma trận 3 x 3 thành ma trận 2x 2
T3 Chỉ {T1}


H Biểu diễn tọa độ trong hệ trục tọa độ đồng nhất có thể viết như sau
T0 b) (h.x, h.y, h)
T1 a) (h.x, h.y, h.z)
T2 c) (x, y, h.z)
T3 d) (x,y,z)


H Các bề mặt bị khóa hoặc ẩn trong khung cảnh 3 chiều được gọi là
T0 Các bề mặt ẩn (Hidden surface)
T1 Bộ đệm khung (Frame buffer)
T2 Cây tứ phân (Quad tree)
T3 Bề mặt bị mất (Lost surface)


H Nhiệm vụ của bài toán loại bỏ bề mặt ẩn là
T0 Cả {T1} và {T2}
T1 Loại bỏ bề mặt ẩn (Removal of hidden surface)
T2 Nhận diện các bề mặt ẩn (Identification of hidden surface)
T3 Không lựa chọn nào


H Tại sao chúng ta cần phải loại bỏ bề mặt ẩn
T0 Cả {T1} và {T2}
T1 Để hiển thị cảnh thực
T2 Để xác định bề mặt hiện gần nhất
T3 Không lựa chọn nào


H Thuật toán của bài toán loại bỏ bề mặt ẩn là
T0 Cả {T1} và {T2}
T1 Chính xác theo đối tượng (Object-space method)
T2 Chính xác theo ảnh (Image-space method)
T3 Không lựa chọn nào


Phương pháp dựa trên nguyên lý so sánh các đối tượng và các phần của đối tượng với nhau để tìm ra
thành phần ẩn và thành phần hiển thị được gọi là
T0 Chính xác theo đối tượng (Object-space method)
T1 Chính xác theo ảnh (Image-space method)
T2 Chính xác theo bề mặt (Surface-space method
T3 Cả {T0} và {T1}


Phương pháp dựa trên nguyên lý kiểm cha điểm hiển thị với mỗi vị trí điểm ảnh trên mặt phẳng
chiếu được gọi là
T0 Chính xác theo ảnh (Image-space method)
T1 Chính xác theo đối tượng (Object-space method)
T2 Cả {T0} và {T1}
T3 Không lựa chọn nào


H Các kiểu của thuật toán loại bỏ bề mặt ẩn
T0 Tất cả lựa chọn {T1}, {T2} và {T3}
So sánh độ sâu, Z-buffẻ, loại bỏ mặt quay vào trong (Depth comparison, Z-buffer, back-face
T1
removal)
T2 Thuật toán dòng quét, thuật toán ưu tiên (Scan line algorithm, priority algorithm)
T3 Phân hoạch nhị phân, chia nhỏ vùng (BSP method, area subdivision method)


H Thuật toán bề mặt nào dựa trên khía cạnh độ sâu?
T0 Z-buffer
T1 BSP
T2 Chia nhỏ vùng
T3 Loại bỏ mặt quay vào trong


H Thuật toán tương thích với dòng quét được phát triển bởi
T0 Cả {T1} và T{2}
T1 Wylie
T2 Evans
T3 Cat mull


H “Ray-tracing” (theo dấu tia) là mở rộng của
T0 Ray casting
T1 Ray calling
T2 Ray sampling
T3 Ray coherence


H Z -buffer là thuật toán
T0 Đơn giản nhất
T1 Phức tạp nhất
T2 Rộng nhất
T3 Không lựa chọn nào


H Kiểu cây nào của cấu trúc dữ liệu mà mỗi nút trong có 4 nút con
T0 Cây tứ phân (Quad tree)
T1 Cây 4 điểm (Point quad tree)
T2 Cây 4 cạnh (Edge quad tree)
T3 Không lựa chọn nào


H Thuật toán người thợ sơn dựa trên thuộc tính của
T0 Bộ đệm khung (Frame buffer)
T1 Đa giác (Polygon)
T2 Bộ đệm độ sâu (Depth buffer)
T3 Không lựa chọn nào


H Tham số chính của thuộc tính đường cong và bề mặt là
T0 Tất cả các lựa chọn {T1}, {T2} và {T3}
T1 Kiểu (Type)
T2 Độ rộng (Width)
T3 Màu sắc (Color)


H Các đường cong mành hóa với các độ rộng khác nhau có thể được hiển thị sử dụng
T0 Các nhịp ngang hoặc dọc (Horizontal and vertical spans)
T1 Các nhịp ngang (Horizontal spans)
T2 Các nhịp dọc (Vertical spans)
T3 Chỉ {T2}


H Nếu độ lớn của hệ số góc đoạn cong nhỏ hơn 1 thì
T0 Chúng ta có thể vẽ các nhịp dọc
T1 Chúng ta có thể vẽ các nhịp ngang
T2 Chỉ {T1}
T3 Tất cả các lựa chọn trên


H Nếu hệ số góc là 1 thì đường tròn, elip và các loại đường cong khác sẽ ở dạng
T0 Nhỏ nhất (Thinnest)
T1 Dày (Thick)
T2 Lớn (Big)
T3 Gồ ghề (Rough)


H Một trong các phương pháp hiển thị đường con dày là
T0 Hệ số góc (Curve slope)
T1 Độ rộng (Curve width)
T2 Đầu mút (Curve cap)
T3 Chỉ {T2}


Mặt nạ điểm ảnh (pixel masks) để thực thi lựa chọn kiểu đường thẳng được sử dụng trong thuật toán
sau để tạo ra các mẫu gạch (dashed) hoặc chấm (dotted)
T0 Thuật toán đường cong mành (Raster curve algorithm)
T1 Thuật toán đường thẳng mành (Raster line algorithm)
T2 Thuật toán quét mành (Raster scan algorithm)
T3 Thuật toán đường cong ngẫu nhiên (Random curve algorithm)


Chúng ta có thể sinh ra các mẫu gạch (dashed) trong các mẫu 1/8 cung tròn (octant), đoạn của hình
tròn, đoạn nằm ngang sử dụng
T0 Tính đối xứng của đường tròn (Circle symmetry)
T1 Đường tròn (Circles)
T2 Hệ số góc đoạn cong (Curve slope)
T3 Chỉ {T1}


H Chức năng của mặt nạ điểm ảnh (pixel mask) là
T0 Để hiện thị mẫu gạch (dashes) và khoảng trống giữa các mẫu gạch (inter dash spaces) theo hệ số góc
T1 Để hiển thị thuộc tính cong
T2 Để hiển thị các đường cong dày
T3 Không lựa chọn nào


Nếu chúng ta muốn hiển thị các mẫu gạch có độ dài cố định (constant-length dashes), chúng ta cần
phải.
T0 Điều chỉnh số lượng điểm ảnh trong mỗi mẫu gạch
T1 Điều chỉnh số lượng các chấm
T2 Sử dụng các hàm kiểu đường thẳng
T3 Không phải {T0} cũng không phải {T2}


H Các đường cong được hiển thị với các bút hình chữ nhật sẽ
T0 Mảnh hơn và hệ số góc nhỏ hơn 1 (Thicker and magnitude slope is 1)
T1 Mảnh hơn (Thinner)
T2 Dày hơn và hệ số góc lớn hơn 1 (Thicker and magnitude slope >1)
T3 {T0} or {T1}


Điền vào phần bỏ trống ______là một dải linh hoạt (flexible strip) được sử dụng để tạo ra đường cong mượt sử dụng một tập
các điểm.
T0 Đường spline (Spline)
T1 Phương pháp dòng quét (Scan-line method)
T2 Phương pháp sắp xếp độ sâu (Depth-sorting method)
T3 Không lựa chọn nào


H Kiểu của đường cong spline là
T0 Cả {T1} và {T2}
T1 Đường spline mở (Open spline)
T2 Đường spline đóng (Closed spline)
T3 Không lựa chọn nào


H Spline bậc 3 là
T0 Cả {T1} và {T2}
T1 Đơn giản để tính toán
T2 Cung cấp các đường cong liên tục
T3 Không lựa chọn nào


H Dạng tham số của đường spline 3D là
T0 X=f(t),y=g(t),z=h(t)
T1 X=a0,y=b0,z=c0
T2 F(t)=0,g(t)=0,h(t)=0
T3 Không lựa chọn nào


H Hai mô hình màu là
T0 RGB và CMYK
T1 RGB và CMKY
T2 RBG và CYMK
T3 Không lựa chọn nào


H Mô hình RGB được sử dụng cho
T0 Màn hình máy tính
T1 In ấn
T2 Tô màu
T3 Không lựa chọn nào


H Mô hình CMYK được sử dụng cho
T0 In ấn
T1 Màn hình máy tính
T2 Tô màu
T3 Không lựa chọn nào


H Phần giao của 3 màu cơ bản RGB sẽ tạo ra màu
T0 Trắng
T1 Đen
T2 Tím
T3 Xanh nước biển


H Phần giao của 3 màu cơ bản CMYK sẽ tạo ra màu
T0 Đen
T1 Trắng
T2 Tím
T3 Xanh nước biển


Kỹ thuật tạo bóng nào dưới đây (shading techniques) tạo ra hiệu ứng bề mặt phẳng (faceted
appearance)?
T0 Gouraud
T1 flat
T2 Phong
T3 Không lựa chọn nào


H Kỹ thuật tạo bóng nào dưới dây cho phép miêu tả điểm sang (specular highlights)?
T0 Phong
T1 flat
T2 Gouraud
T3 Không lựa chọn nào


H Khẳng định nào dưới đây về các mô hình tạo bóng là đúng
T0 Khi áp dụng tạo bóng phẳng, mô hình ánh sang chỉ được áp dụng một lần cho mỗi đa giác, và mọi
điểm ảnh trên đa giác đó nhận cùng giá trị cường độ sáng
T1 Tạo bóng Phong giả định cùng một vectơ pháp tuyến được áp dụng cho mọi điểm ảnh trên bề mặt
T2 Tạo bóng Gouraud luôn có điểm sáng
T3 Tạo bóng cố định (Constant) yêu cầu tính toán phức tạp hơn tạo bóng Phong


H Lý tưởng hóa nguồn sáng có hướng phù hợp cho nguồn sáng gần với khung cảnh.
T0 True
T1 False
T2
T3


Khi sử dụng mô hình phản chiếu Phong (Phong Reflectance Model), chúng ta tính các kênh đỏ, xanh lá, xanh dương độc lập.
T0 True
T1 False
T2
T3


Khi sử dụng mô hình phản chiếu Phong (Phong Reflectance Model) với tạo phóng trơn (smooth
H shading) cho bề mặt được tam giác hóa, chúng ta tính mô hình phản chiếu Phong một lần cho mỗi tam giác
T0 False
T1 True
T2
T3


H Ý nghĩa của i,f,v,d… theo qui ước trong các hàm của OpenGL?
T0 Chỉ rõ kiểu dữ liêu (int, float, pointer, double, …)
T1 Không có ý nghĩa gì đặc biệt
T2 Chỉ rõ kiểu dữ liêu trong OpenGL được viết cho CPU
T3 Đặc tả đầu ra (Ví dụ: immediate mode, frame buffer, virtual mode, double-buffer, …)


H Đâu là 2 lựa chọn của glShadeModel()?
T0 SMOOTH và FLAT
T1 DEPTH và STENCIL
T2 WIDE và NARROW
T3 FOREGROUND và BACKGROUND


H Cỡ của ma trận biến đổi 3 chiều
T0 4×4
T1 2×2
T2 3×3
T3 3×4


H Bạn có thể chỉ rõ vị trí của một nguồn sáng trong OpenGL?
T0 Có
T1 Không
T2 Thỉnh thoảng
T3


H VA hoặc VAO viết tắt cho?
T0 Vertex Array Object
T1 Vector Array Object
T2 Vertex Automation Output
T3 Vector Array Output


H Chúng ta phải làm gì để quay đối tượng quanh một điểm không phải gốc tọa độ?
T0 Dịch đối tượng tới gốc tọa độ, xoay quah gốc tọa độ sau đó dịch tới vị trí ban đầu
T1 Phép quay chỉ thực hiện được quanh gốc tọa độ
T2 Thực hiện câu lệnh glRotate và chỉ rõ điểm mà đối tượng quay quanh
T3


H Trong OpenGL, GLSL là viết tắt của?
T0 Graphics Library Shader Language
T1 Graphical Library of Shader Languages
T2 Geographic Land and Survey Library
T3 Graphical Language and Shading Library


H glMaterialf(…) thực hiện chức năng?
T0 Định nghĩa thuộc tính chất liệu của đối tượng được vẽ cho hiệu ứng hiển thị
T1 Bật thuộc tính chất liệu
T2 Chuyển sang chế độ chất liệu để thêm hiệu ứng hiển thị
T3 Lấy thuộc tính chất liệu của đối tượng được vẽ


H Một số thủ tục OpenGL không thể lưu trữ trong danh sách hiển thị (display list)?
T0 Yes
T1 No
T2
T3


H Dạng đa giác nào hoạt động tốt nhất trong VBO để mô hình hóa đối tượng đặc (solid)?
T0 Triangles, Triangle Strips và Triangle Fans
T1 Triangles, quads và N-gons
T2 Quads, N-gons và unilateral N-gons
T3 N-gonal coplanar line strips


H Các thành phần tạo nên nguồn sáng trong OpenGL?
T0 Specular và Ambient.
T1 Diffuse, Specular, và Ambient.
T2 Diffuse và Ambient.
T3 Diffuse, Opaque, Ambient.


H Loại dữ liệu nào được lưu trữ trong VBO?
T0 Đỉnh đa giác (Vertices)
T1 Thông tin chia sẻ ngũ cảnh (Context-sharing Information)
T2 Điểm ảnhPixels
T3 Phân mảnh (Fragments)


H Hằng số hợp lệ cho glStencilOp?
GL_KEEP, GL_ZERO,GL_REPLACE, GL_INCR, GL_INCR_WRAP, GL_DECR,
GL_DECR_WRAP, GL_INVERT
T1 Một số nằm trong khoảng 0 và 255
T2 TRUE hoặc FALSE
T3 GL_R, GL_G, GL_B, GL_RGB, GL_RGBA, GL_ARGB, GL_BGRA


H Biến đổi (transformation) là gì ?
T0 Phép toán được sử dụng thể tạo các di chuyển của các điểm và đối tượng theo mong muốn
T1 Chuyển qua lại giữa các bộ đệm
T2 Hàm của OpenGL dùng để biến dạng (morph) đa giác thành đa giác khác.
T3


Nói chung, các đa giác nguyên thủy (primitive polygon) nào được dùng để tạo lưới để biểu diễn các
đối tượng phức tạp
T0 Tam giác (Triangle)
T1 Hình vuông (Square)
T2 Hình tròn (Circle)
T3 Hình chữ nhật (Rectangle)


H Nếu không bật nguồn sáng, hàm nào dưới đây chỉ rõ màu của các đỉnh
T0 glColor()
T1 glClearColor()
T2 glDisplayfunc()
T3 Không hàm nào


H Sự khác nhau giữa glColor3d và glColor3f?
T0 glColor3d có tham số kiểu double trong khi glColor3f có tham số kiểu float
T1 glColor3d chỉ thiết lập RGB, trong khi glColor3f thiết lập R,G,B và A
T2 glColor3d cho phép thao tác với màu 3d trong khi glColor3f chỉ cho phép 8-bit màu
T3 glColor3d trong không gian thực trong khi glColor3f trong không gian số nguyên


H FBO là gì?
T0 Framebuffer Object
T1 File Buffered Output
T2 Frictionless Baryonic Oscillation
T3 Friday Buy Out


H Hàm nào có thể thiết lập kích cỡ của vùng hiển thị
T0 glViewport()
T1 gluPerspective()
T2 Không lựa chọn nào
T3 glDisplayfunc()


H Ánh sáng môi trường (ambient light) có trong OpenGL?
T0 Có
T1 Thỉnh thoảng
T2 Không
T3


H OpenGL có hỗ trợ mành hóa (Rasterization)?
T0 Có
T1 Không
T2
T3


H OpenGL là viết tắt của
T0 Open Graphics Library
T1 Open General Liability
T2 Open Guide Line
T3 Open Graphics Layer


H Opengl hệ trục tọa độ Decac ba chiều vuông góc (3D Cartesian Coordinate System).
T0 Đúng
T1 Sai
T2
T3


H Khi một phép quay được thực hiện, ta có thể thực hiện phép quay ngược
T0 Đúng
T1 Sai
T2
T3


H glVertex được dùng để vẽ các hình nguyên thủy trong OpenGL (OpenGL primitives).
T0 Đúng
T1 Sai
T2
T3


H Loại dữ liệu nào được lưu trữ trong VAO?
Trạng thái của đỉnh (Vertex state) và các thông tin dữ liệu khác dùng cho rendering trong luồng xử lý
đồ họa
T1 Các thông tin lũy thửa để phân tích dữ liệu dạng sóng
T2 Thông tin tài nguyên của chương trình như trees, lists và data types
T3 Các chuỗi nhị phân


H VBO là gì?
T0 Vertex Buffer Object
T1 Vertex Binding Object
T2 Variable Buffer Output
T3


H “depth buffer” là gì và chức năng của nó?
T0 Một kiểu bộ đệm tích lũy thông tin độ sâu trong khung cảnh 3 chiều
T1 Một lược đồ tổ chức cảnh 3 chiều
T2 Mộ bộ đệm được đặc tả để thực hiện cảnh dưới nước
T3


H OpenGL có cung cấp các đối tượng nguyên thủy như cube, cone, pyramid?
Không chính thức trong đặc tả của OpenGL nhưng các đối tượng này được cung cấp bởi thư viện
GLUT
T1 Có nhưng phải dùng glEnable(GL_PRIMITIVES) trước câu lệnh glBegin
T2 Có.
T3


H OpenGL sử dụng mô hình client-server và một máy trạng thái (state machine)?
T0 Có
T1 Không liên quan
T2 Không
T3


H OpenGL có một máy quay (camera) chính thức không?
T0 Không
T1 Có
T2
T3


H Tổ chức chịu trách nhiệm cho các chuẩn và phát triển của OpenGL?
T0 Khronos
T1 Crysis
T2 Cryptic
T3 Chronos


H Mục đích của GL_REPEAT trong OpenGL?
T0 Lặp lại ảnh chất liệu theo một hướng (ngang hoặc dọc)
T1 Lặp lại câu lệnh cuối cùng
T2 Kích hoạt chế độ 2 bộ đệm
T3 Khởi động lại ứng dụng


Để có được tính toán chính xác cho việc tạo bóng. Độ dài cho các vecto pháp tuyến của đối tượng
là?
T0 1 (đơn vị độ dài)
T1 2
T2 Bất cứ giá trị nào.
T3 Phụ thuộc vào kích cỡ của đối tượng được vẽ


H Tại sao phải xóa bộ đệm?
T0 Khởi tạo lại một trạng thái
T1 Yêu cầu bộ đệm xuất dữ liệu ra màn hình
T2 Để hoán đổi ộ đệm
T3 Để hiển thị được rõ ràng hơn


H glViewport dùng để làm gì?
T0 Thiết lập sự mở rộng cho khung nhìn hiện tại
T1 Thiết lập một viewport hoạt động
T2 Yêu cầu dùng cho hàm glOrtho
T3 Tắt chế độ tích lũy và kích hoạt viewport chuẩn.


H Hai kiểu của shader?
T0 Vertex and fragment.
T1 Fragment and polygon.
T2 Vertex and polygon
T3


H Các hàm trộn (blending function) không phụ thuộc thứ tự
T0 Sai
T1 Đúng
T2
T3


H X,Y,Z,S,T,U và V là gì?
T0 Thành phần tọa độ (Coordinate components)
T1 Các ký tự trong bảng chữ cái và không có ý nghĩa
T2 Tham số lựa chọn trong hàm glVertex*
T3


H OpenGL có cung cấp hiệu ứng vật lý (physics), hệ thống hạt (particle systems)?
T0 Không.
T1 Có nhưng trong thư viện mở rộng Box2d
T2
T3


H Các giá trị “R”, “G”, “B” và “A” trong ngữ cảnh màu sắc có ý nghĩa gì?
T0 Các kênh Red, Green, Blue và Alpha tương ứng
T1 Rotate, Gyrate, Blend và Amorphize
T2 Red, Green, Black, Auburn
T3 Các giá trị “R”, “G”, “B” và “A” trong ngữ cảnh màu sắc có ý nghĩa gì?


H OpenGL có thực hiện các thủ tục cắt xén không
T0 Có
T1 Không
T2
T3


H Loại mảng đỉnh (vertex array) nào không được cung cấp bởi OpenGL?
T0 Đa giác (Polygons)
T1 Đỉnh (Verticies)
T2 Màu sắc (Colors)
T3 Vecto pháp tuyến (Normals)
`



app.get('/', (req, res) => {
    var quiz = []

    // var lines = namet;

    // fs.readFile(filename, 'utf-8', (err, data) => {
    //     if (err) {
    //         console.error('Lỗi khi mở tệp:', err);
    //         return;
    //     }

        
        var question = "";
        var ans0 = "";
        var ans1 = "";
        var ans2 = "";
        var ans3 = "";


        let lines = namet.split('\n');

    

        for (let i = 0; i < lines.length; i++) {
            if(i <= 100)
                console.log("Dòng " + (i + 1) + ": " + lines[i]);
            var temp = lines[i];

            if(temp.startsWith("T0")) {
                ans0 = temp.slice(Math.min(2, temp.length));
                continue;
            }

            if(temp.startsWith("T1")) 
                ans1 = temp.slice(Math.min(2, temp.length));

            else if(temp.startsWith("T2")) {
                ans2 = temp.slice(Math.min(2, temp.length));
                continue;
            }

            else if(temp.startsWith("T3")) {
                ans3 = temp.slice(Math.min(2, temp.length));




                ans0 = ans0.replace("{T1}", "_" + ans1 + "_");
                ans0 = ans0.replace("{T2}", `_` + ans2 + `_`);
                ans0 = ans0.replace("{T3}", "_" + ans3 + "_");

                ans1 = ans1.replace("{T0}", "_" + ans0 + "_");
                ans1 = ans1.replace("{T2}", "_" + ans2 + "_");
                ans1 = ans1.replace("{T3}", "_" + ans3 + "_");

                ans2 = ans2.replace("{T0}", "_" + ans0 + "_");
                ans2 = ans2.replace("{T1}", "_" + ans1 + "_");
                ans2 = ans2.replace("{T3}", "_" + ans3 + "_");

                ans3 = ans3.replace("{T0}", "_" + ans0 + "_");
                ans3 = ans3.replace("{T1}", "_" + ans1 + "_");
                ans3 = ans3.replace("{T2}", "_" + ans2 + "_");

                quiz.push({
                    "question": question,
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
        // var temp = getRandomInteger(3, 3)
        res.send(quiz[temp]);
    
        
    // });


    
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
