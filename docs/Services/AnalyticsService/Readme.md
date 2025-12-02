# Analytics Service

## Giới thiệu

Service Analytics cung cấp các công cụ phân tích và báo cáo dữ liệu cho hệ thống CityResQ360.

## Chức năng chính

### 1. Thu thập dữ liệu

- Theo dõi hoạt động người dùng
- Ghi lại các sự kiện hệ thống
- Lưu trữ metrics và logs

### 2. Phân tích và Báo cáo

- Tạo báo cáo thống kê
- Phân tích xu hướng
- Dashboard trực quan

### 3. Real-time Analytics

- Theo dõi thời gian thực
- Cảnh báo tự động
- Monitoring hệ thống

## API Endpoints

```typescript
GET / api / analytics / reports;
POST / api / analytics / events;
GET / api / analytics / dashboard;
GET / api / analytics / metrics;
```

## Tích hợp

Service này tích hợp với:

- **AIMLService**: Cung cấp dữ liệu cho phân tích ML
- **IncidentService**: Phân tích dữ liệu sự cố
- **SearchService**: Tối ưu hóa tìm kiếm

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
