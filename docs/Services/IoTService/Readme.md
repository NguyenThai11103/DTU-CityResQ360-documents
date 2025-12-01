# IoT Service - Tổng quan

## Giới thiệu

IoT Service quản lý kết nối và giao tiếp với các thiết bị IoT trong hệ thống CityResQ360.

## Chức năng chính

### 1. Quản lý Thiết bị

- Đăng ký thiết bị mới
- Theo dõi trạng thái thiết bị
- Cập nhật firmware
- Quản lý cấu hình

### 2. Thu thập Dữ liệu

- Nhận dữ liệu từ sensors
- Lưu trữ time-series data
- Xử lý dữ liệu real-time

### 3. Điều khiển Thiết bị

- Gửi lệnh điều khiển
- Cấu hình từ xa
- Khởi động lại thiết bị

### 4. Giám sát

- Theo dõi health status
- Cảnh báo khi thiết bị offline
- Thống kê hoạt động

## Loại Thiết bị

### Cảm biến Môi trường

- 🌡️ Nhiệt độ & Độ ẩm
- 💨 Chất lượng không khí
- 🌧️ Lượng mưa
- 💧 Mực nước

### Camera & Giám sát

- 📹 Camera an ninh
- 🚦 Camera giao thông
- 🌊 Camera giám sát lũ

### Thiết bị Điều khiển

- 💡 Đèn đường thông minh
- 🚰 Van điều khiển nước
- 🔔 Còi báo động

## Giao thức Hỗ trợ

- **MQTT**: Giao tiếp real-time
- **HTTP/HTTPS**: RESTful API
- **WebSocket**: Streaming data
- **CoAP**: Thiết bị IoT nhẹ
- **LoRaWAN**: Kết nối tầm xa

## Tích hợp

Service này tích hợp với:

- **FloodEyeService**: Cung cấp dữ liệu cảm biến mực nước
- **AnalyticsService**: Lưu trữ và phân tích dữ liệu
- **NotificationService**: Gửi cảnh báo khi thiết bị offline
- **IncidentService**: Tạo sự cố tự động từ dữ liệu sensor

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
