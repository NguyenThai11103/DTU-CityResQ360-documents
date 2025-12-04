# AnalyticsService - Phân tích dữ liệu & báo cáo

## 📋 Tổng quan

**Ngôn ngữ lập trình:** Python 3.11 + FastAPI + ClickHouse + Pandas  
**Cơ sở dữ liệu:** ClickHouse (`analytics_db`)  
**Trạng thái:** 🟡 Đang phát triển

Dịch vụ Analytics cung cấp khả năng phân tích dữ liệu mạnh mẽ, tạo báo cáo chi tiết và dashboard thời gian thực cho hệ thống CityResQ360.

---

## 🎯 Chức năng chính

### 📊 Thống kê Dashboard

- **Số liệu thời gian thực**

  - Tổng số phản ánh
  - Số sự cố đang xử lý
  - Thời gian phản hồi trung bình
  - Tỷ lệ hoàn thành
  - Người dùng hoạt động

- **Theo dõi KPI**

  - Response time SLA
  - Resolution time SLA
  - Customer satisfaction score
  - Agency performance
  - System uptime

- **Chỉ số hiệu suất**

  - Reports per day/week/month
  - Average resolution time
  - First response time
  - Escalation rate
  - Reopen rate

- **Phân tích xu hướng**
  - Time-series trends
  - Seasonal patterns
  - Growth rate
  - Forecasting
  - Anomaly detection

### 📈 Tạo báo cáo

- **Báo cáo ngày/tuần/tháng**

  - Daily summary
  - Weekly digest
  - Monthly report
  - Quarterly review
  - Annual report

- **Phạm vi ngày tùy chỉnh**

  - Custom date range
  - Comparison periods
  - Year-over-year
  - Month-over-month
  - Week-over-week

- **Xuất ra PDF/Excel**

  - PDF reports với charts
  - Excel spreadsheets
  - CSV exports
  - JSON data dumps
  - Scheduled exports

- **Lập lịch tự động**
  - Scheduled reports
  - Email delivery
  - Auto-generation
  - Recurring schedules
  - Cron-based triggers

### 🔍 Tổng hợp dữ liệu

- **Phân tích đa chiều**

  - Multi-dimensional analysis
  - Drill-down capabilities
  - Slice and dice
  - Pivot tables
  - OLAP cubes

- **Tổng hợp chuỗi thời gian**

  - Time-series aggregation
  - Rolling windows
  - Moving averages
  - Cumulative sums
  - Rate of change

- **Phân tích nhóm**

  - Group by category
  - Group by location
  - Group by agency
  - Group by status
  - Custom grouping

- **Phân tích phễu**
  - Conversion funnel
  - Drop-off analysis
  - Stage-by-stage metrics
  - Bottleneck identification
  - Optimization insights

### 🎯 Trí tuệ kinh doanh

- **Phân tích dự đoán**

  - Predictive models
  - Machine learning integration
  - Trend forecasting
  - Risk prediction
  - Resource planning

- **Phát hiện bất thường**

  - Anomaly detection
  - Outlier identification
  - Unusual patterns
  - Alert triggers
  - Root cause analysis

- **Nhận dạng mẫu**

  - Pattern recognition
  - Clustering analysis
  - Association rules
  - Sequence mining
  - Behavioral patterns

- **Dự báo**
  - Time-series forecasting
  - Demand prediction
  - Capacity planning
  - Budget forecasting
  - Scenario analysis

---

## 📊 Loại báo cáo

### Báo cáo vận hành

- Tổng quan hoạt động hệ thống
- Số lượng phản ánh theo loại
- Thời gian xử lý trung bình
- Tỷ lệ hoàn thành đúng hạn
- Top issues và hotspots

### Báo cáo hiệu suất cơ quan

- Số lượng sự cố được gán
- Thời gian phản hồi
- Thời gian giải quyết
- Tỷ lệ hoàn thành
- Đánh giá từ người dân

### Báo cáo người dùng

- Số lượng người dùng mới
- Người dùng hoạt động
- Engagement metrics
- CityPoint earned/redeemed
- User satisfaction

### Báo cáo địa lý

- Phản ánh theo khu vực
- Bản đồ nhiệt
- Hotspot analysis
- Coverage analysis
- Regional comparison

---

## 🔗 Tích hợp

Dịch vụ này tích hợp với:

- **ClickHouse**: Lưu trữ dữ liệu phân tích
- **AnalyticsConsumer**: Nhận sự kiện từ RabbitMQ
- **CoreAPI**: Cung cấp dữ liệu cho dashboard
- **IncidentService**: Phân tích dữ liệu sự cố
- **IoTService**: Phân tích dữ liệu cảm biến
- **NotificationService**: Gửi báo cáo định kỳ

---

## 📊 Cấu trúc dữ liệu ClickHouse

### Bảng Events

```sql
CREATE TABLE events (
    event_id UUID,
    event_type String,
    timestamp DateTime,
    user_id UInt64,
    entity_id UInt64,
    entity_type String,
    metadata String,
    created_at DateTime DEFAULT now()
) ENGINE = MergeTree()
ORDER BY (timestamp, event_type);
```

### Tổng hợp báo cáo

```sql
CREATE MATERIALIZED VIEW reports_daily AS
SELECT
    toDate(created_at) as date,
    category,
    status,
    count() as total_reports,
    avg(resolution_time) as avg_resolution_time
FROM reports
GROUP BY date, category, status;
```

---

## 📄 Giấy phép

Dự án này được phân phối dưới [GNU General Public License v3.0](https://github.com/MNM-DTU-DZ/CityResQ360-DTUDZ/blob/master/LICENSE).
