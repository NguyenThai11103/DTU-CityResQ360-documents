# Notification Service 

## Giới thiệu

Notification Service quản lý việc gửi thông báo đến người dùng qua nhiều kênh khác nhau.

## Chức năng chính

### 1. Gửi Thông báo

- Push notification (Mobile)
- Email
- SMS
- In-app notification

### 2. Quản lý Template

- Template cho từng loại thông báo
- Đa ngôn ngữ
- Personalization

### 3. Scheduling

- Gửi ngay lập tức
- Lên lịch gửi
- Gửi định kỳ

### 4. Tracking

- Theo dõi trạng thái gửi
- Thống kê tỷ lệ mở
- Analytics

## Loại Thông báo

| Loại         | Kênh         | Ưu tiên    |
| ------------ | ------------ | ---------- |
| 🚨 Khẩn cấp  | Push, SMS    | Cao        |
| 📢 Cảnh báo  | Push, Email  | Trung bình |
| ℹ️ Thông tin | Push, In-app | Thấp       |
| 📊 Báo cáo   | Email        | Thấp       |

## API Endpoints

```typescript
// Gửi thông báo
POST /api/notifications/send
POST /api/notifications/send-bulk

// Quản lý
GET /api/notifications
GET /api/notifications/:id
PUT /api/notifications/:id/read

// Template
GET /api/notifications/templates
POST /api/notifications/templates
```

## Tích hợp

Service này tích hợp với:

- **IncidentService**: Thông báo về sự cố
- **FloodEyeService**: Cảnh báo ngập lụt
- **IoTService**: Cảnh báo thiết bị
- **CoreAPI**: Gửi thông báo qua API

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
