# Incident Service
## Giới thiệu

Incident Service quản lý toàn bộ vòng đời của các sự cố trong hệ thống CityResQ360.

## Chức năng chính

### 1. Quản lý Sự cố

- Tạo sự cố mới
- Cập nhật trạng thái
- Phân công xử lý
- Theo dõi tiến độ

### 2. Phân loại Tự động

- AI phân loại loại sự cố
- Xác định mức độ ưu tiên
- Gợi ý đơn vị xử lý

### 3. Workflow

- Quy trình xử lý tự động
- Thông báo cho các bên liên quan
- Escalation khi quá hạn

### 4. Báo cáo

- Thống kê sự cố
- Thời gian xử lý trung bình
- Hiệu suất đơn vị

## Loại Sự cố

| Loại          | Mô tả                 | Thời gian xử lý |
| ------------- | --------------------- | --------------- |
| 🔥 Cháy nổ    | Hỏa hoạn, cháy rừng   | < 15 phút       |
| 🌊 Ngập lụt   | Ngập úng, lũ lụt      | < 30 phút       |
| 🚗 Giao thông | Tai nạn, ùn tắc       | < 20 phút       |
| ⚡ Điện nước  | Mất điện, vỡ ống nước | < 1 giờ         |
| 🏗️ Hạ tầng    | Đường hư, cầu sập     | < 2 giờ         |
| 🌳 Môi trường | Ô nhiễm, cây đổ       | < 4 giờ         |

## Trạng thái Sự cố

```
Mới → Đã tiếp nhận → Đang xử lý → Đã xử lý → Đã đóng
                          ↓
                      Tạm hoãn
```

## Tích hợp

Service này tích hợp với:

- **NotificationService**: Gửi thông báo cho các bên liên quan
- **AIMLService**: Phân loại và dự đoán sự cố
- **AnalyticsService**: Phân tích dữ liệu sự cố
- **MediaService**: Lưu trữ hình ảnh/video
- **SearchService**: Tìm kiếm sự cố
- **FloodEyeService**: Tạo sự cố tự động khi phát hiện ngập

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
