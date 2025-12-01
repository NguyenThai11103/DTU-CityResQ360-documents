# FloodEye Service - Tổng quan

## Giới thiệu

FloodEye Service là hệ thống giám sát và cảnh báo lũ lụt thông minh, sử dụng AI và IoT để dự đoán và phát hiện nguy cơ ngập lụt.

## Chức năng chính

### 1. Giám sát Thời gian thực

- Theo dõi mực nước tại các điểm quan trắc
- Đo lường lượng mưa
- Giám sát tình trạng cống thoát nước

### 2. Dự báo và Cảnh báo

- Dự đoán nguy cơ ngập lụt
- Cảnh báo sớm cho người dân
- Phân tích xu hướng thời tiết

### 3. Bản đồ Nguy cơ

- Hiển thị khu vực nguy hiểm
- Cập nhật real-time
- Lịch sử ngập lụt

### 4. Tích hợp IoT

- Kết nối với cảm biến mực nước
- Đọc dữ liệu từ trạm khí tượng
- Điều khiển hệ thống thoát nước tự động

## Mức độ Cảnh báo

| Mức       | Mực nước | Màu     | Hành động           |
| --------- | -------- | ------- | ------------------- |
| An toàn   | < 1.0m   | 🟢 Xanh | Không cần hành động |
| Theo dõi  | 1.0-1.5m | 🟡 Vàng | Theo dõi sát        |
| Cảnh báo  | 1.5-2.0m | 🟠 Cam  | Chuẩn bị sơ tán     |
| Nguy hiểm | > 2.0m   | 🔴 Đỏ   | Sơ tán ngay         |

## Machine Learning

FloodEye sử dụng các mô hình ML:

- **LSTM**: Dự đoán mực nước
- **Random Forest**: Phân loại mức độ rủi ro
- **CNN**: Phân tích hình ảnh từ camera

## Tích hợp

Service này tích hợp với:

- **IoTService**: Nhận dữ liệu từ cảm biến
- **AIMLService**: Dự đoán và phân tích
- **NotificationService**: Gửi cảnh báo
- **AnalyticsService**: Lưu trữ và phân tích dữ liệu lịch sử
- **IncidentService**: Tạo sự cố tự động khi phát hiện ngập

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
