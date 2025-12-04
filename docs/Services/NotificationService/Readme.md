# NotificationService - Thông báo đa kênh

## 📋 Tổng quan

**Ngôn ngữ lập trình:** Node.js 20 + Express + MongoDB + FCM + Redis + RabbitMQ  
**Cơ sở dữ liệu:** MongoDB (`notification_db`)  
**Trạng thái:** ✅ Sẵn sàng production

Dịch vụ Notification quản lý việc gửi thông báo đến người dùng qua nhiều kênh khác nhau (Push, Email, SMS, In-app) với khả năng tùy chỉnh và theo dõi chi tiết.

---

## 🎯 Chức năng chính

### 📱 Thông báo đẩy

- **Firebase Cloud Messaging**

  - Gửi thông báo đến thiết bị iOS
  - Gửi thông báo đến thiết bị Android
  - Hỗ trợ rich notification (ảnh, action buttons)
  - Silent push cho cập nhật nền

- **Quản lý token thiết bị**

  - Đăng ký token FCM
  - Cập nhật token tự động
  - Xóa token khi logout
  - Theo dõi token hết hạn

- **Hỗ trợ nhiều thiết bị**
  - Một người dùng nhiều thiết bị
  - Đồng bộ trạng thái đọc
  - Gửi đến tất cả thiết bị
  - Quản lý thiết bị chính

### 📧 Thông báo Email

- **Tích hợp NodeMailer**

  - Gửi email SMTP
  - Hỗ trợ Gmail, SendGrid, AWS SES
  - Retry tự động khi thất bại
  - Queue email để xử lý

- **Template email HTML**

  - Sử dụng Handlebars template engine
  - Responsive email design
  - Personalization (tên, nội dung động)
  - Preview template

- **Cấu hình SMTP**

  - Cấu hình linh hoạt
  - Hỗ trợ nhiều SMTP server
  - TLS/SSL encryption
  - Authentication

- **Quản lý hàng đợi email**
  - Queue với Redis
  - Batch sending
  - Rate limiting
  - Theo dõi trạng thái gửi

### 📨 Thông báo SMS

- **Tích hợp nhà cung cấp**

  - Twilio integration
  - VNPT SMS gateway
  - Hỗ trợ nhiều provider
  - Fallback provider

- **Template SMS**

  - Template có biến động
  - Giới hạn ký tự
  - Unicode support
  - Shortlink tự động

- **Theo dõi gửi tin**
  - Trạng thái gửi (sent, delivered, failed)
  - Delivery report
  - Cost tracking
  - Analytics

### 🔔 Thông báo trong ứng dụng

- **Thông báo thời gian thực**

  - WebSocket connection
  - Real-time updates
  - Instant delivery
  - Offline queueing

- **Trạng thái đã đọc/chưa đọc**

  - Đánh dấu đã đọc
  - Đọc tất cả
  - Xóa thông báo
  - Lưu trữ lịch sử

- **Lịch sử thông báo**

  - Xem lại thông báo cũ
  - Tìm kiếm thông báo
  - Lọc theo loại
  - Phân trang

- **Đếm số badge**
  - Số thông báo chưa đọc
  - Cập nhật real-time
  - Reset khi đọc
  - Hiển thị trên icon app

### ⚙️ Tùy chọn người dùng

- **Bật/tắt các kênh**

  - Tắt push notification
  - Tắt email
  - Tắt SMS
  - Chỉ nhận thông báo quan trọng

- **Danh mục thông báo**

  - Phản ánh mới
  - Cập nhật trạng thái
  - Bình luận mới
  - Điểm thưởng
  - Cảnh báo khẩn cấp

- **Giờ yên tĩnh**

  - Không gửi thông báo trong khoảng thời gian
  - Cấu hình theo múi giờ
  - Ngoại trừ thông báo khẩn cấp
  - Lên lịch tự động

- **Tùy chọn ngôn ngữ**
  - Tiếng Việt
  - English
  - Template đa ngôn ngữ
  - Auto-detect

---

## 📬 Loại thông báo

| Loại               | Kênh             | Ưu tiên    | Mô tả                                  |
| ------------------ | ---------------- | ---------- | -------------------------------------- |
| 🚨 **Khẩn cấp**    | Push, SMS, Email | Cao        | Cảnh báo nguy hiểm, sự cố nghiêm trọng |
| 📢 **Cảnh báo**    | Push, Email      | Trung bình | Cập nhật quan trọng                    |
| ℹ️ **Thông tin**   | Push, In-app     | Thấp       | Thông tin chung                        |
| 💬 **Tương tác**   | Push, In-app     | Trung bình | Bình luận, phản hồi                    |
| 🏆 **Điểm thưởng** | Push, In-app     | Thấp       | CityPoint earned/redeemed              |
| 📊 **Báo cáo**     | Email            | Thấp       | Báo cáo định kỳ                        |

---




## 🔗 Tích hợp

Dịch vụ này tích hợp với:

- **CoreAPI**: Gửi thông báo qua API chính
- **RabbitMQ**: Lắng nghe sự kiện từ các dịch vụ khác
- **IncidentService**: Thông báo về sự cố
- **FloodEyeService**: Cảnh báo ngập lụt
- **IoTService**: Cảnh báo từ cảm biến
- **MediaService**: Đính kèm media trong thông báo

---

## 📄 Giấy phép

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
