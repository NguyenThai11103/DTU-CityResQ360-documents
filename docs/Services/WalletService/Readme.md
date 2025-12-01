# Wallet Service - Tổng quan

## Giới thiệu

Wallet Service quản lý ví điện tử và các giao dịch tài chính trong hệ thống CityResQ360.

## Chức năng chính

### 1. Quản lý Ví

- Tạo ví người dùng
- Nạp tiền
- Rút tiền
- Kiểm tra số dư

### 2. Giao dịch

- Chuyển tiền
- Thanh toán dịch vụ
- Lịch sử giao dịch
- Hoàn tiền

### 3. Rewards & Incentives

- Điểm thưởng
- Cashback
- Voucher
- Loyalty program

### 4. Bảo mật

- Two-factor authentication
- Transaction verification
- Fraud detection

## Loại Giao dịch

| Loại            | Mô tả                 | Phí  |
| --------------- | --------------------- | ---- |
| 💰 Nạp tiền     | Nạp vào ví            | 0%   |
| 💸 Rút tiền     | Rút về ngân hàng      | 1%   |
| 🔄 Chuyển khoản | Chuyển cho người khác | 0.5% |
| 🎁 Thưởng       | Nhận điểm thưởng      | 0%   |

## API Endpoints

```typescript
// Ví
GET /api/wallet/balance
POST /api/wallet/deposit
POST /api/wallet/withdraw

// Giao dịch
GET /api/wallet/transactions
POST /api/wallet/transfer
GET /api/wallet/transactions/:id

// Rewards
GET /api/wallet/rewards
POST /api/wallet/redeem
```

## Tích hợp

Service này tích hợp với:

- **CoreAPI**: API thanh toán
- **IncidentService**: Thưởng cho người báo cáo sự cố
- **NotificationService**: Thông báo giao dịch
- **AnalyticsService**: Phân tích giao dịch

## License

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
