# Kiến trúc CityResQ360

## 🏗️ Tổng quan hệ thống

CityResQ360 được thiết kế theo kiến trúc **Microservices** và **Hướng sự kiện (Event-Driven Architecture)**, kết hợp công nghệ hiện đại để xây dựng một nền tảng phản ánh, cảnh báo và giám sát đô thị thông minh.

## ⚙️ Công Nghệ và Framework

Hệ thống sử dụng đa dạng các công nghệ hiện đại, tập trung vào hiệu năng và khả năng mở rộng:

| Phân Loại | Công Nghệ Cụ Thể | Vai trò |
| :--- | :--- | :--- |
| **Giao diện Người dùng (UI)** | **React Native** | Phát triển ứng dụng di động đa nền tảng. |
| **Cổng API (Gateway)** | **API Gateway** (Kong/Nginx) | Bảo mật, giới hạn tốc độ (Rate Limit), xác thực JWT. |
| **Backend/Core APIs** | **Laravel** (PHP), **Python** (FastAPI) | Phát triển dịch vụ RFI/Public API và các microservices. |
| **Xác thực (Auth)** | **Keycloak** (SSO/ID), **JWT** | Quản lý định danh và truy cập (IDDC), xác thực người dùng. |
| **Tin nhắn/Sự kiện** | **Kafka** (Redpanda), **MQTT Broker** (EMQX/Mosquitto) | Xử lý hàng đợi sự kiện tốc độ cao và tin nhắn từ cảm biến (Sensors). |
| **Cơ sở dữ liệu (Database)** | **PostgreSQL/PostGIS** | Dữ liệu quan hệ và dữ liệu địa lý (Geo/PoI). |
| **Lưu trữ đối tượng (Object Storage)** | **MinIO / S3** | Lưu trữ dữ liệu media (Media Service). |
| **Tìm kiếm (Search)** | **OpenSearch** | Cung cấp khả năng tìm kiếm nâng cao (Search API). |
| **Cache/Hàng đợi** | **Redis Queue/Cache** | Caching, quản lý hàng đợi cho Notifier Service và Rule Engine. |
| **Rule Engine** | **NDx/Drools** | Xử lý logic nghiệp vụ và các quy tắc cảnh báo. |

## 🛠️ Các Dịch Vụ và Chức Năng Chính (Microservices)

Hệ thống được tổ chức thành các dịch vụ độc lập (Microservices), giao tiếp chủ yếu qua HTTP (REST) và Kafka/MQTT.

### 1. Dịch vụ Cốt lõi

* **RFI/Public API:** Điểm truy cập chính cho các giao diện người dùng. Xử lý logic tổng hợp dữ liệu (Aggregation) và caching.

* **Media Service:** Quản lý và lưu trữ tệp tin đa phương tiện vào **MinIO / S3**.

* **Wallet Service:** Xử lý các chức năng liên quan đến CityPoint (ví điện tử/thanh toán).

* **Search API:** Cung cấp giao diện tìm kiếm dữ liệu thông qua **OpenSearch**.

### 2. Dịch vụ IoT và Phân tích Dữ liệu

* **IoT Adapter:** Nhận tin nhắn từ **MQTT Broker** (Sensors), xử lý và đưa vào luồng sự kiện **Kafka**.

* **NLP (Natural Language Processing):** Phân tích và xử lý ngôn ngữ tự nhiên từ mô tả phản ánh.

* **Vision (Vision Python/FastAPI):** Xử lý thị giác máy tính, tạo ra các sự kiện **`vision_alert`** để phân loại sự cố từ hình ảnh.

* **Geo/PoI:** Xử lý dữ liệu vị trí và điểm quan tâm (Point of Interest) sử dụng **PostGIS**.

### 3. Dịch vụ Quản lý và Thông báo

* **Report Service:** Tạo báo cáo, lưu trữ vào **DB Report** và **`Produce report observed`** event.

* **Rule Engine (NDx/Drools):** Tiêu thụ các sự kiện cảnh báo từ Vision và Report, áp dụng luật nghiệp vụ để **`Produce alert triggered`**.

* **Incident Service:** Xử lý và quản lý vòng đời của các sự cố, lưu trữ vào **DB Incident**.

* **Notifier Service:** Nhận sự kiện **`alert triggered`** và phân phối thông báo (sử dụng **Redis Queue/Cache**) tới ứng dụng (React Native App) và các nền tảng khác (Laravel Webhook).

## ➡️ Luồng Dữ liệu Chính

### 1. Luồng gửi phản ánh từ người dân

| Bước | Từ | Đến | Hoạt động |
|------|----|----|-----------|
| 1 | React Native App | API Gateway | Gửi yêu cầu gửi phản ánh (ảnh, mô tả, GPS) qua HTTPS + JWT |
| 2 | API Gateway | RFI/Public API | Xác thực và chuyển tiếp request |
| 3 | RFI/Public API | Media Service | Upload hình ảnh/video vào MinIO/S3 |
| 4 | Media Service | RFI/Public API | Trả về URL media |
| 5 | RFI/Public API | PostgreSQL/PostGIS | Lưu metadata phản ánh |
| 6 | RFI/Public API | Kafka | Đẩy event `report_created` vào hàng đợi |
| 7 | Kafka | Vision Service | Consumer nhận event để xử lý hình ảnh |
| 8 | Kafka | NLP Service | Consumer nhận event để phân tích văn bản |
| 9 | Vision/NLP | Kafka | Tạo event `vision_alert` hoặc `nlp_classified` |
| 10 | Kafka | Rule Engine | Áp dụng luật để đánh giá mức độ ưu tiên |
| 11 | Rule Engine | Kafka | Tạo event `alert_triggered` nếu cần |
| 12 | Kafka | Notifier Service | Gửi thông báo đến người dùng và cơ quan |

### 2. Luồng xử lý từ cảm biến IoT

| Bước | Từ | Đến | Hoạt động |
|------|----|----|-----------|
| 1 | Sensors | MQTT Broker | Gửi dữ liệu cảm biến (nhiệt độ, độ ẩm, chất lượng không khí...) |
| 2 | MQTT Broker | IoT Adapter | Consumer nhận và xử lý message |
| 3 | IoT Adapter | Kafka | Chuyển đổi và đẩy event vào Kafka |
| 4 | Kafka | Rule Engine | Phân tích dữ liệu và áp dụng quy tắc |
| 5 | Rule Engine | Incident Service | Tạo incident nếu phát hiện bất thường |
| 6 | Incident Service | Notifier Service | Gửi cảnh báo đến các bên liên quan |

### 3. Luồng xử lý và quản lý sự cố

| Bước | Từ | Đến | Hoạt động |
|------|----|----|-----------|
| 1 | Cơ quan chức năng | API Gateway | Xác nhận và phân công xử lý sự cố |
| 2 | API Gateway | Incident Service | Cập nhật trạng thái và tiến độ xử lý |
| 3 | Incident Service | PostgreSQL | Lưu thông tin cập nhật |
| 4 | Incident Service | Kafka | Tạo event `incident_updated` |
| 5 | Kafka | Notifier Service | Thông báo cập nhật đến người dân |
| 6 | Kafka | Wallet Service | Tính điểm CityPoint cho người phản ánh |
| 7 | Wallet Service | PostgreSQL | Cập nhật điểm thưởng |

### 4. Luồng tìm kiếm và báo cáo

| Bước | Từ | Đến | Hoạt động |
|------|----|----|-----------|
| 1 | React Native App / Web | API Gateway | Gửi yêu cầu tìm kiếm phản ánh |
| 2 | API Gateway | Search API | Truy vấn OpenSearch |
| 3 | Search API | OpenSearch | Tìm kiếm trong index |
| 4 | OpenSearch | Search API | Trả về kết quả tìm kiếm |
| 5 | Search API | API Gateway | Trả về kết quả cho client |
| 6 | Report Service | PostgreSQL | Tạo báo cáo thống kê định kỳ |
| 7 | Report Service | Kafka | Tạo event `report_generated` |

## 🔧 Các thành phần chính

### Frontend Layer (React Native)
- Giao diện người dùng mobile
- Bản đồ realtime
- Push notifications
- Camera integration

### API Gateway Layer
- Authentication & Authorization (JWT, Keycloak)
- Rate limiting
- Request routing
- Load balancing

### Backend Services (Laravel/Python)
- Business logic
- REST API
- Event producers
- Data aggregation

### Message Queue Layer (Kafka/MQTT)
- Event streaming
- Pub/Sub messaging
- Real-time data processing
- Decoupled services communication

### Database Layer (PostgreSQL/PostGIS)
- Data persistence
- Geospatial queries
- ACID transactions
- Backup/restore

### Storage Layer (MinIO/S3)
- Media storage
- File versioning
- CDN delivery
- Access control

### AI/ML Services
- Computer Vision (YOLOv8/Detectron2)
- NLP (PhoBERT/XLM-R)
- Fusion Layer
- Classification & Priority Assessment

### Search Layer (OpenSearch)
- Full-text search
- Geospatial search
- Analytics
- Real-time indexing

### Cache Layer (Redis)
- Session storage
- Query cache
- Queue management
- Pub/sub messaging

## 🔐 Bảo mật

### Authentication
- JWT tokens
- Keycloak SSO
- OAuth 2.0
- Multi-factor auth

### Data Security
- Encryption at rest
- HTTPS everywhere
- TLS/SSL for MQTT
- API key management

### Access Control
- Role-based access (RBAC)
- API rate limiting
- IP whitelisting
- Service mesh security

## 📈 Khả năng mở rộng

### Horizontal Scaling
- Kubernetes orchestration
- Load balancing
- Database replication
- Cache distribution
- Message queue partitioning

### Vertical Scaling
- Instance upgrades
- Storage optimization
- Performance tuning
- Resource allocation

## 🔄 Backup & Recovery

### Data Backup
- PostgreSQL automated backups
- S3/MinIO versioning
- Kafka log retention
- Redis persistence

### Disaster Recovery
- Multi-region deployment
- Failover procedures
- Data restoration plan
- Service redundancy

## 📝 Documentation

### Technical Docs
- API documentation
- Database schema
- Event schema
- Integration guides

### User Guides
- Citizen guide
- Agency guide
- Admin documentation
- Developer guide

## 🗺️ Kiến trúc hệ thống

Thiết kế theo kiến trúc như hình vẽ bên dưới:
<!-- ![Architecture Diagram](../static/img/Achitecture.png) -->

## 👥 Đối tượng người dùng

| 👥 Người dân | 🏛️ Cơ quan chức năng | 🤝 NGO/Tình nguyện viên | 🧑‍💼 Admin | 🧠 Nhà nghiên cứu |
|-------------|---------------------|------------------------|-----------|-----------------|
| Gửi phản ánh, nhận cảnh báo | Quản lý & xử lý sự cố | Truy cập dữ liệu mở | Quản lý hệ thống | Phân tích dữ liệu |

## 💡 Tính năng chính

### 🤖 Phản ánh & nhận diện tự động
- AI Vision phân tích hình ảnh
- NLP xử lý mô tả văn bản
- Phân loại mức độ nguy hiểm
- Cảnh báo khẩn cấp

### 📡 Giám sát & quản lý realtime
- Bản đồ trực quan
- Dashboard thống kê
- Quản lý sự cố
- Chỉ số minh bạch

### 🏦 CityWallet – Hệ thống điểm thưởng
- CityPoint token
- Đổi quà/voucher
- Gamification

## 📞 Liên hệ

| Role      | Name                    | Email                                                                 |
| --------- | ----------------------- | --------------------------------------------------------------------- |
| Developer | **Lê Thanh Trường**      | [thanhtruong23111999@gmail.com](mailto:thanhtruong23111999@gmail.com) |
| Developer | **Nguyễn Văn Nhân**      | [vannhan130504@gmail.com](mailto:vannhan130504@gmail.com)             |
| Developer | **Nguyễn Ngọc Duy Thái** | [kkdn011@gmail.com](mailto:kkdn011@gmail.com)                         |

## 📝 License
Dự án được phân phối dưới giấy phép [MIT License](https://github.com/Truongpyeo/CityResQ360-DTUDZ/blob/master/LICENSE)

*"Được phát triển với ❤️ bởi Nhóm DTU-DZ"*
